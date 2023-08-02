var a = 3;
var b = {
	a: 4,
	getA: function () {
		this.a = 5;
		return function () {
			return this.a;
		}
	}
}
var c = b.getA()();  //3
console.log(c);
 
// var c = b.getA().call(b);  
// console.log(c); //5
// b.getA.call(window).call(b)  //4