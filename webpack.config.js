var path = require('path');
var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = (env = {}) => {
    var SRC = path.resolve(__dirname, "src");
    var DIST = path.resolve(__dirname, "dist");
    var NODE_MODULES = path.resolve(__dirname, "node_modules");

    const isProd = env.production === true 

    var config = {
        entry: SRC + "/app.js",
        output: {
            path: DIST,
            filename: "app-build.min.js"
        },
        module: {
            loaders: [{
                include: SRC,
                loader: "babel-loader",
            }]
        },
        plugins: isProd 
            ? [
                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify('production'),
                    'process.env.GA_TRACKING_ID': JSON.stringify('UA-113627363-1')
                }),
                new UglifyJsPlugin(
                {
                    uglifyOptions:{
                        output: {
                            ascii_only: true,                    }
                        }
                })
            ] 
            : [
                new webpack.DefinePlugin({
                    'process.env.GA_TRACKING_ID': null
                }),
            ],
        resolve: {
            modules: [
                SRC,
                NODE_MODULES
            ]
        },
    }

    return config
}
