const webpack = require('webpack');
const path = require('path');
module.exports = {
	entry: [
		  'webpack/hot/dev-server',
		  'webpack-hot-middleware/client?reload=true',
		  './public/js/app.js'
  	],
	output: {
      path:  path.join(__dirname, '/built'),
	  publicPath: '/built/',
	  filename: 'main.js',
  	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module : {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react', "react-hmre"],
					compact: false
				 }
			}
		]
	}
};
