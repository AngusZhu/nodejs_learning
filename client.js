var net = require('net');
var client = net.connect({port:8888},function(){
	console.log('connected to server ');


});

client.on('data',function(data){

	console.log(data.toString());
	client.end();
});

client.on('end',function(){
	console.log(' disconnect to server ');

});
