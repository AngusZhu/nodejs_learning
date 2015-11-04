var http = require('http');
var fs = require('fs');
var path =  require('path');
var url = require('url');


http.createServer(function(req,resp){
	var pathname = url.parse(req.url).pathname;
	console.log('the request pathname is :',pathname); 
	fs.readFile(pathname.substr(1),function(err,data){
		if(err){

			console.log(err.statck);
			resp.writeHead(404,{'content-type':'text/html'});
		}else{

			resp.writeHead(200,{'content-type':'text/html'});
			resp.write(data.toString());
		}
		resp.end();


	});	

}).listen(8888);
