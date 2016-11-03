var express = require('express');
var app = express();

var server = app.listen(8000, function(){
var host = server.address().address;
var port = server.address().port;


app.use(express.static('built'))

app.get('/', function(req, res, next){
//	res.send('HELLO';
res.sendFile(__dirname + "/" + "public/pages/index.html");
})

console.log('app is running  ',  host , port);
});
