const webpack = require("webpack")
const path = require("path")

module.exports = [
  {
    entry: {
      main: "./src/main.js",
    },
    output: {
      path: path.join(__dirname, "dist", "bundled"),
      filename: "[name].js"
    },
    module: {
      loaders: [
        {
          test: /createjs/,
          loader: 'imports-loader?this=>window!exports-loader?window_load_createjs'
        }
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({'window_load_createjs': 'window_load_createjs'}),
    ],
    resolve: {
      alias: {
        window_load_createjs: path.join(__dirname, 'node_modules', 'createjs', 'builds', '1.0.0', 'createjs.min.js'),
      }
    }
  }
]