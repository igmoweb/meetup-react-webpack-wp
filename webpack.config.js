let path = require('path');

module.exports = {
    entry: './_src/js/app.js',
    output: {
        path: path.resolve( __dirname, 'js' ),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [ {
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                } ]
            }
        ]
    },
    devtool: 'cheap-module-source-map'
};