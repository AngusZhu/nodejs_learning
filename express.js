var express = require('express');

var app=express();


app.get('/',function(req,res){
	
//	res.send('hello world<br>'+req.app+'<br>'+req.path);
//	res.redirect('http://www.sina.com.cn');
	//res.sendFile('/opt/tech/nodejs/nodejs_learning/readme.txt');
	//res.sendFile('/opt/tech/nodejs/nodejs_learning/bash.pdf');
	res.download('/opt/tech/nodejs/nodejs_learning/bash.pdf');
	/*res.send(req.baseUrl);
	res.send(req.body);
	res.send(req.fresh);
	res.send(req.hostname);
	+req.originalUrl);
	res.send(req.params);
	res.send(req.path);
	res.send(req.protocol);
	res.send(req.query);
	res.send(req.subdomains);
	res.send(req.accepts());
	res.send(req.get());
	res.send(req.is());*/
});

var server = app.listen(8888,function(){
		var host = server.address().address;
		var port = server.address().port;	
		console.log(server.address());
		console.log('application access address http://%s:%s',host,port);
			
	});

