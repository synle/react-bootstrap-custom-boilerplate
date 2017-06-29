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
        loaders : [
            // jsx (react)
            {
                test: /\.(js|jsx)$/,
                include : SRC_DIR,
                exclude: /node_modules/,
                loader : 'babel-loader'
            },
            // scss
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
                // use the following for inline style tag
                // loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        // will be put inside config.output.path... (defined above)
        new ExtractTextPlugin('index.css')
    ]
};

module.exports = config;
