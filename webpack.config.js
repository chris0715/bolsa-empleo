var webpack = require('webpack');
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
            {test: /\.(js|jsx)$/, loader: "babel-loader" }
        ]
    }
};