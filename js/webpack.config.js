var webpack = require('webpack');

module.exports = {
    entry: './Default.js',
    target: 'web',
    output: {
        path:  __dirname + '/../',
        filename: 'pture.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    }
};