var fs = require('fs');

var readerStream = fs.createReadStream('input.txt');

var writerStream  = fs.createWriteStream('out.txt');

readerStream.pipe(writerStream);

console.log(' execute finished ... ' );
