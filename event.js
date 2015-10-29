var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
	console.log("connect success !");
	eventEmitter.emit('data_received');
}

eventEmitter.on('connect',connectHandler);

eventEmitter.on('data_received',function(){
	console.log(" data received " );
});

eventEmitter.emit('connect');
console.log(" execute finished ! " );
