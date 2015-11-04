var net = require("net");

var server = net.createServer(function(connection){
	console.log('client connected');
	connection.on('end',function(){
		console.log(' client closed ');
	});
	connection.write("hello world!\r\n");
	connection.pipe(connection);
});
	server.listen(8888,function(){
		console.log('server is listening...');
	});
