const execSync = require('child_process').execSync;

const affectedProjects = [
  execSync(`nx affected:apps --base=origin/master~2 --plain`).toString().split(' '),
  execSync(`nx affected:libs --base=origin/master~2 --plain`).toString().split(' ')
];

const lint1 = affectedProjects.slice(0, Math.floor(affectedProjects.length / 2));
const lint2 = affectedProjects.slice(Math.floor(affectedProjects.length / 2));

const commands = {
  lint1: lint1.map(s => `nx lint ${s}`),
  lint2: lint2.map(s => `nx lint ${s}`)
};

console.log(JSON.stringify(commands, null, 2));
