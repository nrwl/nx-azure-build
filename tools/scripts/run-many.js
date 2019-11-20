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
