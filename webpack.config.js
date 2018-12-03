const { uglifyPlugin } = require("./webpackPlugins");
const path = require("path");

module.exports = {
  entry: "./src/app.js",
  
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "./"
  },

  optimization: {
    minimizer: [
      uglifyPlugin
    ]
  }
};
