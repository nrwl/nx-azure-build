const execSync = require('child_process').execSync;

if (
  process.env.hasOwnProperty('CACHE_RESTORED') &&
  !process.env.CACHE_RESTORED
) {
  console.log('Cache was not restored, running ngcc.');
  execSync(
    `ngcc --properties es2015 browser module main --first-only --create-ivy-entry-points`,
    {
      stdio: 'inherit'
    }
  );
} else {
  console.log('Cache was restored, skipping ngcc.');
}
