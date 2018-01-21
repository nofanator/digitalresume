var path = require('path');
var webpack = require('webpack');

var SRC = path.resolve(__dirname, "src");
var DIST = path.resolve(__dirname, "dist");
var NODE_MODULES = path.resolve(__dirname, "node_modules");

var config = {
    entry: SRC + "/app.js",
    output: {
        path: DIST,
        filename: "app-build.js"
    },
    module: {
        loaders: [{
            include: SRC,
            loader: "babel-loader",
        }]
    },
    resolve: {
        modules: [
            SRC,
            NODE_MODULES
        ]
    },
}

module.exports = config;
