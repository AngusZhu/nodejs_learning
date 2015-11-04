var express = require('express');
var url = require('url');
var app = express();
app.get('/',function(req,res){
	console.log('main page get request');
	res.send('hello guest!');

});

app.post('/',function(req,res){


	console.log('main page post request');
	res.send('hello guest post');

});

app.delete('/del_user',function(req,res){

	console.log('/del_user resposne delete request');
	res.send('delete page');
});

app.get('/list_user',function(req,res){

	console.log('/list_user get request ');
	res.send('user list page');
});

app.get('/ab*cd',function(req,res){

	console.log("/ab*cd get request");
	console.log(' regRex pattern request ' );
	res.send('regRex pattern request :the path is  '+url.parse(req.url).pathname);
});

var server = app.listen(8888,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("appliction request address is http://%s:%s",host,port);


});
