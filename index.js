var express = require('express');
var webpack = require('webpack');
var config = require('./webpack-config-dev');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var compiler = webpack(config);
var app = express();


var server = app.listen(8000, function(){
var host = server.address().address;
var port = server.address().port;


app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    hot : true,
    stats: {colors: true}
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log
}));

app.use(express.static('built'));

app.get('/', function(req, res, next){
//	res.send('HELLO';
res.sendFile(__dirname + "/" + "public/pages/index.html");
})

console.log('app is running  ',  host , port);
});
