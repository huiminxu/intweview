// Function.prototype.bind = function (ctx,...args){
//     return ()=>{
//         return this.call(ctx,...args);
//     }
// }
// const obj ={
//     name:'liqing',
//     age:18
// }

// function fn(){
//     console.log(this.name,this.age);
// }

// const f = fn.bind(obj);
// f();




function add (x,y,z){
    return  x+y+z;
} 
// 通用的柯里化函数
function curry(fn,...args){
    if(fn.length<=args.length){
        return fn(...args)
    };
    // 递归调用
    return (...rest)=>{
        return curry(fn,...args,...rest);
    }
}

const curryAdd = curry(add);
const curryAdd2 = curryAdd(1,2)
console.log(curryAdd2(3));

