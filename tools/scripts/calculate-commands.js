const execSync = require('child_process').execSync;
const isPr = process.argv[2] === 'True';
const baseSha = isPr ? 'origin/master~1' : 'origin/master';

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
