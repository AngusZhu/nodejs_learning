var fs = require('fs');

var data = " hello my lover 啊" ;


// create a writeable file outWrite
var writeStream = fs.createWriteStream('outWrite.txt');

// use UTF8 as charset
writeStream.write(data,'UTF8');

// mark file wirte finished ...
writeStream.end();

writeStream.on('finish',function(){

	console.log('write finished ' );
	console.log(' execute finished...');
});

writeStream.on('error',function(err){

	console.log(err.stack);

});
