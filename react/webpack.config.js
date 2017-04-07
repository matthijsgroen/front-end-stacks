const path          = require('path');
const webpack       = require('webpack');

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  node: {
    process: false
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  performance: {
    hints: false
  }
}
