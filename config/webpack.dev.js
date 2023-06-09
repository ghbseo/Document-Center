const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        hot: true,
        compress: true,
        port: 8081,
        historyApiFallback: true,
        liveReload: true
    },
    output: {
        filename: 'main.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        alias: {
            inferno: 'inferno/dist/index.dev.esm.js'
        }
    },
    target: 'web'
});
