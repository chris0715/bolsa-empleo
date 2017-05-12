var webpack = require('webpack');
var BrowserSync = require('browser-sync-webpack-plugin')
var path = require('path');

module.exports = {
    entry: "./server/entry.js",
    output: {
        path: __dirname+'/public/js',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" }
        ],
    },
    plugins:[
        new BrowserSync({
            host:'localhost',
            port: 3000,
            proxy: 'http://localhost:5000',
            reload: false
        })
    ]
};