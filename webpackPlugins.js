const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const uglifyPlugin = new UglifyJSPlugin({
  cache: true,
  parallel: true
});

module.exports = {
  uglifyPlugin
};
