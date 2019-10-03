const execSync = require('child_process').execSync;
const readFileSync = require('fs').readFileSync;

const isMaster = process.argv[2] === 'master';
const baseSha = isMaster ? 'origin/master~1' : 'origin/master';

// -----
// This section isn't required in Nx 8.7.
// You simply need to invoke affected with --executor=json-output
const affectedProjects = [
  ...execSync(`npx nx affected:apps --base=${baseSha} --plain`)
    .toString()
    .trim()
    .split(' '),
  ...execSync(`npx nx affected:libs --base=${baseSha} --plain`)
    .toString()
    .trim()
    .split(' ')
];

affectedProjects.sort(() => 0.5 - Math.random());

const nxJson = JSON.parse(readFileSync('workspace.json').toString());

function withTarget(target) {
  return affectedProjects.filter(projectName => {
    return (
      nxJson.projects[projectName] &&
      nxJson.projects[projectName].architect &&
      nxJson.projects[projectName].architect[target]
    );
  });
}
// -----

function divide(array) {
  const a1 = array.slice(0, Math.floor(array.length / 2));
  const a2 = array.slice(Math.floor(array.length / 2));
  return [a1, a2];
}

const lint = divide(withTarget('lint'));
const test = divide(withTarget('test'));

const commands = {
  lint1: lint[0],
  lint2: lint[1],
  test1: test[0],
  test2: test[1],
  build: withTarget('build').map(p => `--build-${p}`)
};

console.log(JSON.stringify(commands));
