const common    = require('./webpack.common');
const merge     = require('webpack-merge');
const webpack   = require('webpack');

module.exports = merge(common, {
    devtool : 'inline-source-map',
    devServer : {
        contentBase : './build'
    },

    module : {
        rules : [
            {
                test : /\.s?css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader',
                    "sass-loader"
                ]
            }
        ]
    },

    plugins : [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});