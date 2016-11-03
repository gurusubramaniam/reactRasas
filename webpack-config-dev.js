module.exports = {
  entry: './public/js/app.js',
  output: {
    filename: '[name].js',
    path: __dirname + '/built'
  },
 module : {
	loaders: [
    		{
      			test: /\.js$/,
      			exclude: /node_modules/,
      			loader: 'babel-loader',
    			query: {
        			presets: ['es2015', 'react'],
					compact: false
     			 }
    		}
  ]
}
}
