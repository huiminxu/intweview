var a={n:1};
var b=a;
a.x=a={n:2};
console.log(a,a.x,b,b.x);