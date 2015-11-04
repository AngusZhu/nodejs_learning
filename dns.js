var dns = require('dns');
dns.lookup('www.baidu.com',function onLookup(err,address,family){

	console.log('ip address: ',address);
	dns.reverse(address,function(err,hostnames){
		if(err){
			console.log(err.stack);	
		}
		console.log('the hostname is :',JSON.stringify(hostnames));
		callservice(address);

	});	

});

var callservice = function (address){
	console.log('address is :' ,address);
	dns.lookupService('111.13.101.208',80,function onLookup(err,data1,data2){
	if(err){
		console.log(err);
	}	
	console.log('arguments:',arguments);
	console.log('data1',data1);
	console.log('data2',data2);

})};
