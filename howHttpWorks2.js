var http = require("http");

function onRequest(request,response){

	console.log(request);
	response.writeHead(200,{"content-type":"text/plain"});
	response.write("hello world");
	response.end();

}

http.createServer(onRequest).listen(8888);
