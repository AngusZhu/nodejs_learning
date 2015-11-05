const fs = require('fs');

const child_process = require('child_process');

for( var i = 0 ;i<3;i++){

	var work_process = child_process.fork("support_fork.js",[i]);
	work_process.on('close',function(code){
		console.log("child exit ,exit code is " ,code);

	});


}
