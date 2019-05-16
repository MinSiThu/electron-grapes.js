var path = require('path');
var webpack = require('webpack');
let glob = require('glob');

module.exports = {
     entry: glob.sync("./static/javascripts/*.js"),
     output: {
         path: path.resolve(__dirname, 'static','javascripts','build'),
         filename: 'app.bundle.js'
     },
     module: {
        rules: [{
            test: /\.js$/,
            loader: ["babel-loader"],
        }]
    },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };