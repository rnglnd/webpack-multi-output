const merge = require("webpack-merge");
const htmlWebpackMultiBuildPlugin = require("html-webpack-multi-build-plugin");
const baseConfig = require("./webpack.config.production.base");

const config = {
  name: "production",
  mode: "production",
  output: {
    filename: "main.js"
  },
  plugins: [new htmlWebpackMultiBuildPlugin()]
};

module.exports = merge(baseConfig, config);
