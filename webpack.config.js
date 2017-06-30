var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');


// configs
var SRC_DIR = path.resolve(__dirname, 'src');
var DEST_DIR = path.resolve(__dirname, 'dist');


// build steps
var config = {
    entry: {
        //[name] => entry
        'page-guide': SRC_DIR + '/page-guide.jsx', // tutorial page
        'index': SRC_DIR + '/index.jsx' // main bundle
    },
    output: {
        path: DEST_DIR,
        filename: "[name].js" // page-guide.js
    },
    module : {
        rules: [
            // binary files (fonts and svg...)
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                loader: [
                    "file-loader"
                ]
            },
            // jsx (react)
            {
                test : /\.jsx?/,
                include : SRC_DIR,
                loader : [
                    'babel-loader'
                ],
                exclude: /node_modules/
            },
            // scss
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                includePaths: [
                                    path.resolve(__dirname, "node_modules")
                                ]
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        // will be put inside config.output.path... (defined above)
        // public/index.css (DEST_DIR/index.css)
        new ExtractTextPlugin('[name].css')
    ]
};

module.exports = config;
