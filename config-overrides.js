const { override, addBabelPlugin } = require('customize-cra');

module.exports = override(
    addBabelPlugin('babel-plugin-transform-remove-console')
);
