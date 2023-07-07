var a=123;
function test(){
    console.log(a); //undefined
    var a=456;
}
test();


var b=123;
function test2(){
    console.log(b); //Cannot access 'b' before initialization
    let b=456;
}
test2();


// React FC（考察 hooks 用法）
// 实现一个 Functional Component，渲染一个按钮，组件有且仅有一个状态（number，初始值为 0）
// 监听页面滚动事件（需要使用 lodash throttle）打印 number
// 点击按钮，number 自增