/**
 * Created by Umayr Shahid on 10/27/2015.
 */

'use strict';

var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + '/app',
  entry: {
    app: [
      'webpack/hot/dev-server',
      './src/app.module'
    ]
  },
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass?includePaths[]=' + path.resolve(__dirname, './node_modules')
      },
      {
        test: /\.js$/,
        loader: 'ng-annotate',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=image/svg+xml'
      },
      {
        test: /\.(png|jpe?g|gif|woff)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      '_': 'lodash'
    }),
    // definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true'))
    }),
    new HtmlWebpackPlugin({
      template: './app/index.html'
    })
  ]
};
