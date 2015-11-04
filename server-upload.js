var express  = require('express');
var bodyParser = require('body-parser');
var multer= require('multer');
var fs = require('fs');
var app = express();


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(multer({dest:'./upload_tmp'}).array('image'));


app.get('/',function(req,res){
	res.sendFile(__dirname+"/"+"upload.html");
   }); 
app.get('/upload.html',function(req,res){
	res.sendFile(__dirname+"/"+"upload.html");
});
app.post('/file_upload',function(req,res){

	console.log(req.files[0]);
	var des_file = __dirname+"/"+req.files[0].originalname;
	console.log('des_file',des_file);
	fs.readFile(req.files[0].path,function(err,data){
	     fs.writeFile(des_file,data,function(err){
		if(err){
			console.log(err);
		}
		else{
			response = {
				message:' File uploaded successfully',
				filename: req.files[0].originalname

			};
		}
		console.log(response);
		res.end(JSON.stringify(response));

		});
	    });

});

var server = app.listen(8888,function(){
	var host = server.address().address;
	var port = server.address().port;	
	console.log('application access request is http://%s:%s',host,port);

});
