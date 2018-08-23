const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

 module.exports = {
     mode : 'development',
     entry: './src/js/index.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'app.bundle.js'
     },
     module: {
         rules: [
             {
                 test: /\.js$/,
                 exclude: /(node_modules|bower_components)/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015', 'react', 'stage-1']
                 }
             },
             {
                test: /\.html$/,
                loader : 'html-loader'
             }
         ]
     },
     resolve: {
         extensions: ['ts', '.js']
     },
     plugins: [
         new HtmlWebPackPlugin({
           template: "./src/index.html",
           filename: "./index.html"
         })
     ],
     stats: {
         colors: true
     },

     devtool: 'source-map'
 };