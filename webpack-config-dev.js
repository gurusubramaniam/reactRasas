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
      			exclude: /(node_modules|bower_components)/,
      			loader: 'babel', // 'babel-loader' is also a valid name to reference
    			query: {
        			presets: ['react','es2015'],
					compact: false
     			 }
    		}
  ]
}
}
