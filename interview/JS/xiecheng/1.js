console.log(a);   //undefined
var a = 3;
var b = function () {
	console.log(a);  //undefined
	var a = 4;
	console.log(a); //4
}
b();