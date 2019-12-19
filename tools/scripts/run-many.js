const execSync = require('child_process').execSync;

const commands = JSON.parse(process.argv[2]);
const projects = commands[process.argv[3]];
const target = process.argv[4];

if (projects.length === 0) {
  execSync(`echo "nothing to run"`, { stdio: [0, 1, 2] });
  return;
}

execSync(
  `npx nx run-many --target=${target} --projects=${projects.join(
    ','
  )} --parallel`,
  { stdio: [0, 1, 2] }
);
