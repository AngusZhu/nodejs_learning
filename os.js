var os = require("os");

console.log("os.tmpdir(),返回操作系统的默认临时文件夹",os.tmpdir());// 
console.log("os.endianness() 返回 CPU 的字节序，可能的是'BE' or 'LE' ",os.endianness());
console.log("os.hostname() hostname",os.hostname());
console.log("os.type() type",os.type());
console.log("os.platform() 操作系统名称",os.platform());
console.log("os.arch() 系统架构",os.arch());
console.log("os.release() 返回操作系统的发行版本",os.arch());
console.log("os.uptime() 返回系统运行时间",os.uptime());
console.log("os.loadavg() load avg",os.loadavg());
console.log("os.totalmem() total mem ",os.totalmem());
console.log("os.networkInterfaces()  网络接口列表", os.networkInterfaces());


