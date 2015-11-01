var buf = new Buffer(10);
var arrBuf = new Buffer([10,20,30,40,50]);
/* also support "ascii", "utf8", "utf16le", "ucs2", "base64" 和 "hex" */
var stringBuf = new Buffer( "www.mylover.com","utf-8");

console.log('-----------------------details -------------------');
console.log();
console.log('the syntax is :','uf.write(string[, offset][, length][, encoding])');
console.log();
console.log('--------examples ------------');
buf = new Buffer(256);
len = buf.write(" www.mylover.com " );
console.log(' code :','len = buf.write(" www.mylover.com " );');
console.log("writer bytes : " + len);
console.log('-----------------------details -------------------');

console.log();
console.log();

console.log('-----------------------read data from buffer-------------------');
console.log(' code is :','buf.toString([encoding][, start][, end])');
console.log('start ( read from postitoin )','buf.toString([encoding][, start][, end])');
console.log('end (read end postitoin )','buf.toString([encoding][, start][, end])');


buf = new Buffer(256);
for (var i = 0; i<26; i++){
	buf[i] = i+97;
}
console.log( buf.toString('ascii'));
console.log( buf.toString('ascii',0,5) );
console.log( buf.toString('utf8',0,5) );
console.log( buf.toString(undefined, 0,5 )); // default use utf8


console.log();
console.log();
console.log('-----------------------read data from buffer end -------------------');
console.log();
console.log();

console.log('----------------------- buffer trans to json ------------------');
console.log();
console.log();
var jsonBuf = new Buffer(' www.mylovers,com ' );
var json = jsonBuf.toJSON(jsonBuf);
console.log("the result is ");
console.log( json );
console.log();
console.log();
console.log('----------------------- buffer trans to json ------------------');
console.log();
console.log();
console.log('----------------------- buffer concat------------------');
console.log();
console.log();
var buf_1 = new Buffer('my name is ');
var buf_2 = new Buffer(' angus ');
var buf_3 = Buffer.concat([buf_1,buf_2]);
console.log('buf_3\'s content :',buf_3); 
console.log( 'after to string:',buf_3.toString());
console.log();
console.log();
console.log('----------------------- buffer concat end------------------');

console.log();
console.log();


console.log('-----------------------buffer copy start-------------------');
console.log();
console.log();
buf1 = new Buffer('ABC');
buf2 = new Buffer(3);//if buffer size less than string length,the string will be trancated
buf1.copy(buf2);
console.log("buf2 contents: " +buf2.toString());
console.log();
console.log();

console.log('-----------------------buffer copy end -------------------');
console.log();
console.log();
console.log('-----------------------buffer slice-------------------');
console.log('buf.slice(start,end);','start','end');
console.log();
console.log();
console.log();
var buff1 = new Buffer('angus');
var buff2 = buff1.slice(0,2);
console.log("buff2 content angus slice(0,2) and the result is : " + buff2.toString());
console.log('buff1 length:',buff1.length);
console.log();
console.log();
console.log();
console.log('-----------------------buffer slice end-------------------');
