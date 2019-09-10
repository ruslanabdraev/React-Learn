var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    mode: "development",  
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        sourceMapFilename: 'bundle.map'
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader',{
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [require('autoprefixer')]
                    }}]
            },
            {
                test: /\.scss/,
                use: ['style-loader','css-loader', {
                    loader: 'postcss-loader',
                    options: {
                      plugins: () => [require('autoprefixer')]
                    }}, 'sass-loader']
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
      })
    ],
    optimization:{
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
                uglifyOptions: {
                    warnings: false,
                    mangle: true
                }
            })
        ]
    }
}