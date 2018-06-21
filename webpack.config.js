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
          test: /node_modules[/\\]createjs/,
          loaders: [
            'imports-loader?this=>window',
            'exports-loader?window.createjs'
          ]
        },
      ],
    },
    resolve: {
      alias: {
        createjs: 'createjs/builds/1.0.0/createjs.js'
      }
    }
  }
]