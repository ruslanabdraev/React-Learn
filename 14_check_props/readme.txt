1. install required packages
================================
npm install style-loader css-loader postcss-loader autoprefixer --save-dev

2. configure 'webpack.config.js' by adding rule into 'module.exports.module.rules'
================================
{
    test: /\.css$/,
    use:['style-loader', 'css-loader',{
    loader: 'postcss-loader',
    options: {
        plugins: () => [require('autoprefixer')]
    }}]
}