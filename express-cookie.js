var express = require('express');
var path  = require('path');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/',function(req,res){
	var Cookies={};
	   req.headers.cookie && req.headers.cookie.split(';').forEach(function( Cookie ) {
        var parts = Cookie.split('=');
        Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
    });
    console.log(Cookies);
	res.writeHead(200,{'Set-Cookie':['mycookie=text','name=angus']});
	console.log('cookies:',req.cookies);
	res.end( JSON.stringify(req.cookies));

}).listen(8888)
