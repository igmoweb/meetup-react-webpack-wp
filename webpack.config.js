let path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin( 'css/style.css' );


module.exports = {
    entry: './_src/js/app.js',
    output: {
        path: path.resolve( __dirname ),
        filename: 'js/app.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            },
            {
                test: /\.scss$/,
                loader: extractSass.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        extractSass
    ]
};