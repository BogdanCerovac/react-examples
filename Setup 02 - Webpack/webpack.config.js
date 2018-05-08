/* global __dirname, module */

module.exports = {
  entry: "./site/src/app.jsx",
  output: {
    path: __dirname + '/site/lib',
    filename: "bundle.js"
  },
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};