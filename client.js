var http = require('http');

var options = {
	host: 'localhost',
	port: 8888,
	path: '/index.html'
};
var callback = function (err,response){
	if(err){
		console.log(err.stack);
	}
	var body = '';
	response.on('data',function(data){
		body +=data;
	});	

	response.on('end',function(){
		console.log(body);
	});

}

var req = http.request(options,callback);
req.end();

