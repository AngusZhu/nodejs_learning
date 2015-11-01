var callSSL  = function(){

	console.log('SSL invoked ');

}
var callOthers = function (){

	console.log(" others invoked " );

}
function route( pathname ){


	if( pathname === '/ssl'){
		callSSL();	
	}
	else{

		callOthers();
	}
	console.log(" About to route a request for " +pathname );


}
exports.route = route;
