let path = require('path');

module.exports = {
    entry: './_src/app.js',
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
            }
        ]
    },
};