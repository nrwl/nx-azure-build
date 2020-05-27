# Blazing Fast Distributed CI with Nx Workspaces

Nx is a set of extensible dev tools for monorepos. Monorepos provide a lot of advantages:

- Everything at that current commit works together. Changes can be verified across all affected parts of the organization.
- Easy to split code into composable modules
- Easier dependency management
- One toolchain setup
- Code editors and IDEs are "workspace" aware
- Consistent developer experience
- ...

But they come with their own technical challenges. The more code you add into your repository, the slower the CI gets.

## Example Workspace

This repo is an example Nx Workspace. It has two applications. Each app has 15 libraries, each of which consists of 30 components. The two applications also share code.

If you run `nx dep-graph`, you will see somethign like this:

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx-azure-build/master/readme-assets/graph.png" width="800"></p>

### CI Provider

This example will use Azure Pipelines, but a very similar setup will work with CircleCI, Jenkins, GitLab, etc..

### **To see CI runs click [here](https://dev.azure.com/nrwlio/nx-azure-ci/_build?definitionId=6&_a=summary).**

## Baseline

Most projects that don't use Nx end up building, testing, and linting every single library and application in the repository. The easiest way to implement it with Nx is to do something like this:

```yaml
jobs:
  - job: ci
    timeoutInMinutes: 120
    pool:
      vmImage: 'ubuntu-latest'
    steps:
      - template: .azure-pipelines/steps/install-node-modules.yml
      - script: yarn nx run-many --target=test --all
      - script: yarn nx run-many --target=lint --all
      - script: yarn nx run-many --target=build --all --prod
```

This will retest, relint, rebuild every project. Doing this for this repository takes about 45 minutes (note that most enterprise monorepos are significantly larger, so in those cases we are talking about many hours.)

The easiest way to make your CI faster is to do less work, and Nx is great at that.

## Building Only What is Affected

Nx knows what is affected by your PR, so it doesn't have to test/build/lint everything. Say the PR only touches `ng-lib9`. If you run `nx affected:dep-graph`, you will see something like this:

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx-azure-build/master/readme-assets/graph-one-affected.png" width="800"></p>

If you update `azure-pipelines.yml` to use `nx affected` instead of `nx run-many`:

```yaml
jobs:
  - job: ci
    timeoutInMinutes: 120
    pool:
      vmImage: 'ubuntu-latest'
    steps:
      - template: .azure-pipelines/steps/install-node-modules.yml
      - script: yarn nx affected --target=test --base=origin/master
      - script: yarn nx affected --target=lint --base=origin/master
      - script: yarn nx affected --target=build --base=origin/master --prod
```

the CI time will go down from 45 minutes to 8 minutes.

This is a good result. It helps to lower the average CI time, but doesn't help with the worstcase scenario. Some PR are going to affect a large portion of the repo.

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx-azure-build/master/readme-assets/graph-everything-affected.png" width="800"></p>

You could make it faster by running the commands in parallel:

```yaml
jobs:
  - job: ci
    timeoutInMinutes: 120
    pool:
      vmImage: 'ubuntu-latest'
    variables:
      IS_PR: $[ eq(variables['Build.Reason'], 'PullRequest') ]
    steps:
      - template: .azure-pipelines/steps/install-node-modules.yml
      - script: yarn nx affected --target=test --base=origin/master --parallel
      - script: yarn nx affected --target=lint --base=origin/master --parallel
      - script: yarn nx affected --target=build --base=origin/master --prod --parallel
```

This helps but it still has a ceiling. At some point, this won't be enough. A single agent is simply insufficent. You need to distrubte CI across a grid of machines.

## Distributed CI

To distribute you need to split your job into multiple jobs.

```

              / lint1
initial_setup - lint2
              - lint3
              - test1
              ....
              \ build3

```

### Initial Setup

The `initial_setup` job figures out what is affected and what needs to run on what agent.

```yaml
jobs:
  - job: initial_setup
    pool:
      vmImage: 'ubuntu-latest'
    variables:
      IS_PR: $[ eq(variables['Build.Reason'], 'PullRequest') ]
    steps:
      - template: .azure-pipelines/steps/install-node-modules.yml
      - powershell: echo "##vso[task.setvariable variable=COMMANDS;isOutput=true]$(node ./tools/scripts/calculate-commands.js $(IS_PR))"
        name: setCommands
      - script: echo $(setCommands.COMMANDS)
        name: echoCommands
```

Where `calculate-commands.js` looks like this:

```javascript
const execSync = require('child_process').execSync;
const isMaster = process.argv[2] === 'False';
const baseSha = isMaster ? 'origin/master~1' : 'origin/master';

// prints an object with keys {lint1: [...], lint2: [...], lint3: [...], test1: [...], .... build3: [...]}
console.log(
  JSON.stringify({
    ...commands('lint'),
    ...commands('test'),
    ...commands('build')
  })
);

function commands(target) {
  const array = JSON.parse(
    execSync(`npx nx print-affected --base=${baseSha} --target=${target}`)
      .toString()
      .trim()
  ).tasks.map(t => t.target.project);

  array.sort(() => 0.5 - Math.random());
  const third = Math.floor(array.length / 3);
  const a1 = array.slice(0, third);
  const a2 = array.slice(third, third * 2);
  const a3 = array.slice(third * 2);
  return {
    [target + '1']: a1,
    [target + '2']: a2,
    [target + '3']: a3
  };
}
```

Let's step through it:

The following defines the base sha Nx uses to execute affected commands.

```javascript
const isMaster = process.argv[2] === 'False';
const baseSha = isMaster ? 'origin/master~1' : 'origin/master';
```

If it is a PR, Nx sees what has changed compared to `origin/master`. If it's master, Nx sees what has changed compared to the previous commit (this can be made more robust by remembering the last successful master run, which can be done by labeling the commit).

The following prints information about affected project that have the needed target. `print-affected` doesn't run any targets, just prints information about them.

```javascript
execSync(`npx nx print-affected --base=${baseSha} --target=${target}`)
  .toString()
  .trim();
```

The rest of the `commands` splits the list of projects into three grouprs or bins.

### Other Jobs

Other jobs use the information crated by `initial_step` to execute the needed tasks.

```yaml
- job: lint1
  dependsOn: initial_setup # this tells lin1 to wait for initial_setup to complete
  condition: |
    and(
      succeeded(),
      not(contains(
        dependencies.initial_setup.outputs['setCommands.COMMANDS'],
        '"lint1":[]'
      ))
    )
  pool:
    vmImage: 'ubuntu-latest'
  variables:
    COMMANDS: $[ dependencies.initial_setup.outputs['setCommands.COMMANDS'] ]
  steps:
    - template: .azure-pipelines/steps/install-node-modules.yml
    - script: node ./tools/scripts/run-many.js '$(COMMANDS)' lint1 lint
```

where `run-many.js`:

```javascript
const execSync = require('child_process').execSync;

const commands = JSON.parse(process.argv[2]);
const projects = commands[process.argv[3]];
const target = process.argv[4];
execSync(
  `npx nx run-many --target=${target} --projects=${projects.join(
    ','
  )} --parallel`,
  {
    stdio: [0, 1, 2]
  }
);
```

### Artifacts

This example doesn't do anything with the artifacts created by the build, but often you will need to upload/deploy them. There are several ways to handle it.

1. You can create a job per application and then copy the output to the staging area, and then once tests complete unstage the files in a separate job and then deploy them.
2. You can use the outputs property from running `npx nx print-affected --target=build` to stash and unstash files without having a job per app.

```json
{
  "tasks": [
    {
      "id": "react-app:build",
      "overrides": {},
      "target": {
        "project": "react-app",
        "target": "build"
      },
      "command": "npm run nx -- build react-app",
      "outputs": [
        "dist/apps/react-app"
      ]
    },
    {
      "id": "ng-app:build",
      "overrides": {},
      "target": {
        "project": "ng-app",
        "target": "build"
      },
      "command": "npm run nx -- build ng-app",
      "outputs": [
        "dist/apps/ng-app"
      ]
    }
  ],
  "dependencyGraph": {
    ...
  }
}
```

### Improvements

With these changes, rebuild/retesting/relinting everything takes only 7 minutes. The average CI time is even faster. The best part of this is that you can add more agents to your pool when needed, so the worst-case scenaro CI time will always be under 15 minutes regardless of how big the repo is.

### Can We Do Better?

This example uses a fixed agent graph. This setup works without any problems for all CI providers. It also scales well for repo of almost any size. So before doing anything more sophisticated, I'd try this approach. Some CI providers (e.g., Jenkins) allow scaling the number of agents dynamically. The `print-affected` and `run-many` commands can be used to implement those setups as well.

## Summary

1. Rebuilding/retesting/relinting everything on every code change doesn't scale. **In this example it takes 45 minutes.**
2. Nx lets you rebuild only what is affected, which drastically improves the average CI time, but it doesn't address the worst-case scenario.
3. Nx helps you run multiple targets in parallel on the same machine.
4. Nx provides `print-affected` and `run-many` which make implemented distributed CI simple. **In this example the time went down from 45 minutes to only 7**
