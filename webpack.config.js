 
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/client/entry.js',
  output: { filename: './build/bundle.js'},
  module: {
    loaders: [
      { test: /.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css!', exclude: /node_modules/ }
    ]
  },
};

