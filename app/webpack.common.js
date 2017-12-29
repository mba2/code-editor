const path = require('path');

module.exports = {
    entry : {
        app : "./src/public/scripts/index.js",
        // secondEntryPoint : "./src/scripts/secondEntryPoint.js"
    },

    output : {
		filename : "[name].js",
		path: path.resolve(__dirname, "build")
	},

    module : {
        rules : [
            // JS PROCESS
            {
              test : /\.js$/,
              exclude : /node_modules/,
              use : "babel-loader"
            },
            // IMAGE PROCESS
			{
				test : /\.(jpeg|jpe?g|svg|png|gif)$/,
				use : [
					{
						loader:'url-loader',
						options : { limit : 40000 }
					},
					'image-webpack-loader'
				]
            },
            // HTML PROCESS
			{
				test: /\.html$/,
				use: ['html-loader']
            },
            // FONT PROCESS
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}