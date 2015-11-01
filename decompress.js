var fs = require('fs');
var zlib  = require('zlib');

fs.createReadStream('input.txt.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('decompass.txt'));

console.log('input.txt.gz decompass finished ');
