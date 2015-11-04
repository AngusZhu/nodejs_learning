var http = require('http');
var express = require('express');
var app  = express();
console.log('try to acess http://localhost:8888/images/pkt.png');
app.use(express.static('public'));

app.get('/',function(req,res){
	res.send('hello world');
});

var server = app.listen(8888,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log(' appliction access url is http://%s:%s',host,port);


});
