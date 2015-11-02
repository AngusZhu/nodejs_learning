var util = require('util');
function Base(){
	this.name = 'base';
	this.base = 1991 ;
	this.sayHello = function(){
		console.log('hello'+this.name);
	}
}
Base.prototype.showName = function(){

	console.log(this.name);

}

function sub(){
	this.name= 'sub';
}

util.inherits(sub,Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new sub();
objSub.showName();
//objSub.sayHello();// objSub have not inherit sayHello
console.log(objSub);
console.log('--------------Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承-------------------');



function Person(){
	this.name = 'angus';
	this.toString = function(){
		return this.name;

	}

}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj,true));


console.log(util.isArray([]));//true
console.log(util.isArray(new Array));//true
console.log(util.isArray({}));//false
 

console.log('---------------------util.isRegExp-----------------');
console.log(util.isRegExp(/angus/));
console.log(util.isRegExp(new RegExp('another regexp')));
console.log(util.isRegExp({}));


console.log('---------------------util.isDate-----------------');
console.log(util.isDate(new Date()));
console.log(util.isDate(Date()));// without new returns a string
console.log(util.isDate({}));
console.log(util.isDate('2015-11-02'));


console.log('---------------------util.isError-----------------');
console.log(util.isError(new Error()));
console.log(util.isError(new TypeError()));
console.log(util.isError({name:'Error',message: ' an error occurred ' }));
