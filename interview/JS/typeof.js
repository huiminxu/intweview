console.log(typeof 1);

console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(typeof [1,2,3]); // object
console.log([]==0); //true
console.log(![]);  // false
console.log('foo' == new function(){return String('foo')}); //false
console.log('foo' == new function(){return  new String('foo')}); //true
console.log(null === null); //true
console.log(typeof NaN); //number
console.log(-0 === 0); //true
console.log(-0 === +0); //true
// set 转数组
// 有效防止 xss 攻击的方式有哪些

// 如何使const声明的对象内属性不可变，只可读？
// 使用Object.freeze(obj)冻结obj，就能使其内部的属性不可变，但有局限，就是obj对象中要是有属性是对象，该对象内属性还能改变，要全不可变的话，就需要使用递归等方式一层一层全部冻结。
