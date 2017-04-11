const path          = require('path');
const webpack       = require('webpack');

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "src/"),
          path.resolve(__dirname, "node_modules/preact-router")
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'babili']
          }
        }
      }
    ]
  },
  node: {
    process: false
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({minimize: true, debug: false}),
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  performance: {
    hints: false
  }
}
