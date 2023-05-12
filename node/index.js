// npm init -y 初始化 package.json
//  npm install lodash --save

// const _ = require('lodash');

// console.log(_.concat([1,2],3))


// nodejs debugger 2.4
   
console.log(100);
console.log(200);
console.log(300); 
const _ = require('lodash');
console.log(_.concat([1,2],3))
// nodejs 自带的模块
const http= require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.end('<h1>hello world</h1>') 
})


server.listen(3000,()=>{
    console.log('listening on 3000 port')
})


// 目标 -需求- 设计 -技术方案 -开发 - 调试 - 部署
 
//服务端要考虑的问题

    // 1.服务稳定性  （PM2）
    // 2.考虑 CPU 和内存 （优化、扩展） （stream 写日志） redis 存 session
        // 承载很多请求
    // 3.日志记录
        // 分析日志
        // 存储日志
        // 记录日志
    // 4.安全
    // 数据

    // 5.集群和服务拆分



