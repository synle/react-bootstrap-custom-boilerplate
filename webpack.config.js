var webpack = require('webpack');
var path = require('path');

var SRC_DIR = path.resolve(__dirname, 'src');
var DEST_DIR = path.resolve(__dirname, 'public');

var config = {
    entry: SRC_DIR + '/index.jsx',
    output: {
        path: DEST_DIR,
        filename: 'index.js'
    },
    module : {
    loaders : [
            {
                test : /\.jsx?/,
                include : SRC_DIR,
                loader : 'babel-loader'
            }
        ]
    }

};

module.exports = config;
