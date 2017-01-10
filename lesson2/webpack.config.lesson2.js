var path = require('path');
var webpack=require('webpack');
var webpackApp = require("./webpack.config.lesson2.js");


module.exports = {
    /*entry: [
     'webpack/hot/dev-server',
     'webpack-dev-server/client?http://localhost:8080',
     path.resolve(__dirname, './way1/js/main.js')
     ],*/
    entry: {
        boudle:'./lesson2/app/main.js',
        vendor:['react','redux','react-redux','redux-thunk','isomorphic-fetch','babel-polyfill','react-dom','redux-logger']
    },
    output: {
        path: path.join(__dirname, './'),
        filename: 'lesson1.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
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
    plugins: [
        //new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,  // remove all comments
            },
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
    ]
}