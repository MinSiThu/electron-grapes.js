var path = require('path');
var webpack = require('webpack');
let glob = require('glob');

module.exports = {
     entry: glob.sync("./static/javascripts/*.js"),
     output: {
         path: path.resolve(__dirname, './static/javascripts/build'),
         filename: 'app.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };