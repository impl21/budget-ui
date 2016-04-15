var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        app: [path.join(__dirname, './web/src/index.js')],
        web: './web/src/index.js'
    },

    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, './web/index.html'), inject: true})
    ]
};