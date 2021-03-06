var path = require('path');
var webpack=require('webpack');
var webpackApp = require("./webpack.config.counter.js");


module.exports = {
    /*entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, './way1/js/main.js')
    ],*/
    entry: './Counter/index.js',
    output: {
        path: path.join(__dirname, './'),
        filename: 'counter.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test        :   /\.js|jsx$/,
                loader      :   "babel-loader",
                query       :   {
                                    presets: ["react", "es2015", "stage-2"],
                                    cacheDirectory: true
                                },
                include     :   path.join(__dirname, '.'),
                exclude     :   /node_modules/
            }
        ]
    },
    plugins: []
}