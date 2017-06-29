var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');


// configs
var SRC_DIR = path.resolve(__dirname, 'src');
var DEST_DIR = path.resolve(__dirname, 'public');


// build steps
var config = {
    entry: SRC_DIR + '/index.jsx',
    output: {
        path: DEST_DIR,
        filename: 'index.js'
    },
    module : {
        // loaders : [
        //     // jsx (react)
        //     {
        //         test : /\.jsx?/,
        //         include : SRC_DIR,
        //         loader : 'babel-loader',
        //         exclude: /node_modules/,
        //         query: {
        //             presets: ['es2015', 'react']
        //         }

        //     },
        //     // scss
        //     {
        //         // Good doc for import node_modules
        //         // https://github.com/AngularClass/angular-starter/issues/727
        //         test: /\.scss$/,
        //         loader: ExtractTextPlugin.extract('css-loader!sass-loader')
        //         // use the following for inline style tag
        //         // loaders: ['style-loader', 'css-loader', 'sass-loader']
        //     }
        // ],
        rules: [
            // jsx (react)
            {
                test : /\.jsx?/,
                include : SRC_DIR,
                loader : 'babel-loader',
                exclude: /node_modules/
            },
            // scss
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader",
                    options: {
                        includePaths: ["node_modules"]
                    }
                }]
            }
        ]
    }
};

module.exports = config;
