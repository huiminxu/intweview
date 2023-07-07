const obj={
    test:function(){
        console.log(this,'1');
    },
    test2:()=>{
        console.log(this,'2');
    }
}
obj.test(); // obj
obj.test2(); //{}
const fn= obj.test;
const fn2 = obj.test2;
fn(); //window
fn2(); //{}


//http://collabedit.com/
