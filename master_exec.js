const fs = require('fs');

const child_process = require('child_process');
var i =0;
for( i =0;i < 3 ;i++ ){
	console.log('i=', i);
	var workerProcess = child_process.exec('node support_exec.js '+i,
		function(error,stdout,stderr){
			if(error){
				console.log(error.stack);
				console.log('Error code ' +error.code);
				console.log('Signal received:'+error.signal);

			}
			console.log('stdout: '+stdout);
			console.log('stderr: '+ stderr);
		});

	workerProcess.on('exit',function(code){
		console.log(' child process '+i+' exit ,exit code ',code);
	});
}



