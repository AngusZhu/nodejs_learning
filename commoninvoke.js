function say(name,age){

	console.log('I am ',name,'and ',age ,'years old');

}

function execute(someFunction,name,age){

	someFunction(name,age);

}
execute(say,"angus",19);
