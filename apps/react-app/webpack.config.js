// nx-ignore-next-line
const { withNx, composePlugins } = require('@nx/webpack');
// nx-ignore-next-line
const { withReact } = require('@nx/react');

module.exports = composePlugins(withNx(), withReact(), (config, context) => {
  return config;
});
