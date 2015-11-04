var http = require('http');

var options = {
	host: 'localhost',
	port: 8888,
	//path: '/index.html'
	path: '/hello.json'
};
var callback = function( response){
	var body = '';
	response.on('data',function(data){
		body +=data;

		if(data.name){
			console.log('data.name',data.name);
		}
	});	

	response.on('end',function(){
		console.log(body);
		var obj	= JSON.parse(body);
		console.log('obj.name',obj.name);
	});

}

var req = http.request(options,callback);
req.end();

