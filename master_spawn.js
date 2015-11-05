const fs = require('fs');

const child_process = require('child_process');
var i =0;
for( i =0;i < 3 ;i++ ){
	console.log('i=', i);
	var workerProcess = child_process.spawn('node',['support_spawn.js',i]);

	workerProcess.stdout.on('data',function(data){

		console.log('stdout',data.toString());

	});
	workerProcess.stderr.on('data',function(data){

		console.log('stderr:'+data.toString());

	});
	workerProcess.on('close',function(code){
		console.log(' child process exit ,exit code ',code);

	});
}



