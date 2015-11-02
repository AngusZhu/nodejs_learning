console.log('-----------------__filename---------------');
console.log(__filename);
console.log();
console.log('-----------------__dirname---------------');
console.log(__dirname);
console.log();
console.log('----------------setTimeout(cb,ms)----------------');
function printHello(){
	console.log("hello,world");
}
var t = setTimeout(printHello,2000);
console.log();
console.log("have not clear setimeout object",t);
console.log('----------------clearTimeout(t)----------------');
clearTimeout(t);
console.log();
console.log('----------------setInterval(cb,ms)----------------');
console.log();
var t22 = setInterval(printHello,3000);
clearInterval(t22);
console.log();
console.log('---------------process global attr-----------------');
console.log();
console.log('stdout',process.stdout);
console.log('stderr',process.stderr);
console.log('stdin',process.stdin);
console.log('env',process.env);
console.log('');

console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());

