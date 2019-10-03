const execSync = require('child_process').execSync;

const affectedProjects = [
  execSync(`npx nx affected:apps --base=origin/master~2 --plain`)
    .toString()
    .split(' '),
  execSync(`npx nx affected:libs --base=origin/master~2 --plain`)
    .toString()
    .split(' ')
];

const lint1 = affectedProjects.slice(
  0,
  Math.floor(affectedProjects.length / 2)
);
const lint2 = affectedProjects.slice(Math.floor(affectedProjects.length / 2));

const commands = {
  lint1,
  lint2
};

console.log(JSON.stringify(commands));
