var http = require("http");
var url = require("url");
var qs = require('querystring');

function start(route){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		var querythings = url.parse(request.url).query;
		var name_value =  qs.parse(request.url)["name"];
		console.log("request for " +pathname+" received .");
		console.log("request query  for " +querythings+" received .");
		console.log("request query  name is " +name_value+" received .");
		
		route(pathname);
		response.writeHead(200,{"content-type":"text/plain"});
		response.write(" hello angus again " );
		response.end();

	}

	http.createServer(onRequest).listen(8888);
	console.log("server has started");
}
exports.start = start;
