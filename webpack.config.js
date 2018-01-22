var path = require('path');
module.exports = {
  entry: './src/midisounds.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'midisoundswebpack.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  externals: {
    'react': 'commonjs react'
  }
};
