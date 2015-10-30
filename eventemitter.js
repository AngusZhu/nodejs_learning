var events = require('events');
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
var emitter = new events.EventEmitter();
var paramsObj={name:'angus',age: 99};

event.on('some_event',function(){
	console.log("some_event happened ");

});
setTimeout(function(){
	event.emit('some_event')},1000);

emitter.on('someEvent', function(arg1, arg2) { 
	console.log("first " );
	console.log('listener1', arg1, arg2); 
}); 
emitter.on('someEvent', function(arg1, paramsObj) { 
	console.log("second" );
	console.log('arg1', arg1 ); 
	console.log('param2',paramsObj);
}); 

emitter.emit('someEvent', 'arg1 参数',paramsObj); 
console.log('-------------------------add Listener start --------------------');

var listener1 = function listener1(){
	console.log(' listener 1 executed ...');
};
var listener2 = function listner2(){
	console.log(' listener 2 executed ...');

};
emitter.addListener('connection',listener1);
emitter.on('connection',listener2);

var enventListeners = require('events').EventEmitter.listenerCount(emitter,'connection');
console.log(enventListeners + ' listener  start listen connect event ' );

emitter.emit('connection');

emitter.removeListener('connection',listener1);
console.log('listener1 will not listen any more ');

emitter.emit('connetion');

eventListeners  = require('events').EventEmitter.listenerCount(emitter,'connection');
console.log(eventListeners + " listener listen connection event " );

console.log('-------------------------add Listener end--------------------');

console.log("finished ...." );


