const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  entry: path.resolve('./index.js'),
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve('dist'),
    port: '3000',
   },
  resolve: {
    modules: [path.resolve("src"), "node_modules"],
    extensions: ['.js', '.jsx', 'jpg']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets:['react','es2015']
        }
      },
      {
        test: /\.jsx$/,
        loaders: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets:['react','es2015']
        }
      },
      {
        test: /\.jpg$/,
         use: [
           {
             loader: 'file-loader',
             options: {
             }  
           }
         ]
       }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ]
};
