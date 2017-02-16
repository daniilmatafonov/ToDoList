const webpack = require('webpack');
module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path: __dirname + '/public',
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader','sass-loader'] },
      {
        test: /\.jsx?$/, exclude: [/node_modules/],loader: "babel-loader",
        query: {presets: ['es2016']}
      },
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }
    ],

  }
};
