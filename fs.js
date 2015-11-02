var fs = require("fs");

fs.readFile('input.txt',function(err,data){

	if(err){
		return console.error(err);
	}
	console.log(' asynchrous read :'+ data.toString());

});


var data=fs.readFileSync('input.txt');
console.log('syn read :'+data.toString());

console.log(" program execute finished ");

console.log('prepare to open file ' );
fs.open('input.txt','r+',function(err,fd){
		
		if(err){
			return console.error(err);
		}
		console.log('file open successfully ' );

	}

);

fs.stat('/opt/tech/nodejs/nodejs_learning',function(err,stats){
	console.log('/opt/tech/nodejs/nodejs_learning is file?',stats.isFile());
	console.log('/opt/tech/nodejs/nodejs_learning is directory?',stats.isDirectory());
});
fs.stat('/opt/tech/nodejs/nodejs_learning/fs.js',function(err,stats){
	console.log('/opt/tech/nodejs/nodejs_learning/fs.js',stats.isFile());
});


console.log('--------------write file --------------------');
fs.writeFile('input.txt','this is the content!',function(err){
	if(err){
		return console.error(err);
	}

	console.log('write successfully');
	console.log('----------split ----------');
	console.log(' write data ' );
	fs.readFile('input.txt',function(err,data){
		if(err){
			return console.error(err);
		}
		console.log('after write file ',data.toString());
	});
		
});
