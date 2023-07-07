// React FC（考察 hooks 用法）
// 实现一个 Functional Component，渲染一个按钮，组件有且仅有一个状态（number，初始值为 0）
// 监听页面滚动事件（需要使用 lodash throttle）打印 number
// 点击按钮，number 自增

// const { useState, useEffect } = require("react")

// const Add = function(){

//     const [number,setNumber] = useState(1);

//     useEffect(()=>{

//         window.addEventListener('scroll', 
//         ()=>console.log(number)
//         , false);

//          return function(){
//             window.removeEventListener('scroll')
//          }
        
//     },number)

//     return <button onClick={()=>{
//         setNumber(number++);
//     }}>

//         {number}
//     </button>
// }

