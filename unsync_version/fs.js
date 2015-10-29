var fs = require("fs"); //fileservice
fs.readFile('input.txt',function(err,data){
	if(err) return console.error( err) ; 
	console.log(data.toString());
});
console.log(" function execute successful " );
