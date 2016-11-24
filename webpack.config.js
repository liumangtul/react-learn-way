var path = require('path');
var webpack=require('webpack');

module.exports = {
    /*entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, './way1/js/main.js')
    ],*/
    entry: './way1/js/main.js',
    output: {
        path: path.join(__dirname, './way1/js/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test        :   /\.js|jsx$/,
                loaders     :   ['babel-loader?presets[]=es2015,presets[]=react']
            }
        ]
    }
}