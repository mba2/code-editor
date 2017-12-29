const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const html = require('html-webpack-plugin');
const clean = require('clean-webpack-plugin');

// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = merge(common, {
	module : {
		rules : [
			// STYLE PROCESS
            {
                test : /\.s?css$/,
                use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{ loader: 'css-loader', options: { importLoaders: 1 } },
						'postcss-loader',
						"sass-loader",
					]
				})
			}
		]
	},

	plugins: [
		// EXTRACTS CSS FILES
		new ExtractTextPlugin("styles.css"),
		// USE A SPECIFIC HTML FILE AS TEMPLATE AND EXPORTS IT INTO THE BUIL FOLDER
		new html({
			template : './src/public/index.html'
		}),
		new clean(['build'])
		// new UglifyJSPlugin({
			// sourceMap : true
		// })
	]
});