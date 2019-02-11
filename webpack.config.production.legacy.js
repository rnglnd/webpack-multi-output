const merge = require("webpack-merge");
const htmlWebpackMultiBuildPlugin = require("html-webpack-multi-build-plugin");
const baseConfig = require("./webpack.config.production");

const config = {
  name: "legacy",
  mode: "production",
  output: {
    filename: "main_legacy.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "env",
                  {
                    modules: false,
                    useBuiltIns: true,
                    targets: {
                      browsers: [
                        "> 1%",
                        "last 2 versions",
                        "Firefox ESR",
                        "ie >= 11"
                      ]
                    }
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [new htmlWebpackMultiBuildPlugin()]
};

module.exports = merge(baseConfig, config);
