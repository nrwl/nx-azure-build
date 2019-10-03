// This file isn't required in Nx 8.7.
// You can simply run: nx affecte --target=mytarget --projects=proj1,proj2 --parallel

const execSync = require('child_process').execSync;

console.log('running commands');
console.log(process.argv);

const commands = JSON.parse(process.argv[2]);
const projects = commands[process.argv[3]];
const command = process.argv[4];

const commandsToRun = projects.map(p => `npx nx ${command} ${p}`);

commandsToRun.forEach(e => {
  execSync(e, { stdio: [0, 1, 2] });
});
