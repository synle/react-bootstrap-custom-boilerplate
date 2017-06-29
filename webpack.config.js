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
        rules: [
            // binary files (fonts and svg...)
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                loader: "file-loader"
            },
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
        new ExtractTextPlugin('index.css')
    ]
};

module.exports = config;
