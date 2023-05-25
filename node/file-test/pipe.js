// web server 中应用不大
// process.stdin.pipe(process.stdout)


const http = require('http');
// const server = http.createServer((req,res)=>{
//     if(req.method==='POST'){
//         req.pipe(res);  //返回的就是请求体
//     }
//     if(req.method==='GET'){

//     }
// })
// server.listen(8000,()=>{
//     console.log('8080') 
// })


//file stream
const fs= require('fs');
const path = require('path');

const fileName = path.resolve(__dirname,'data.txt');
const fileName2 = path.resolve(__dirname,'data-bak.txt');

// 读取文件 stream 
var readStreamFile = fs.createReadStream(fileName);
// 写入文件 stream 
var writeStreamFile = fs.createWriteStream(fileName2);
// 执行拷贝
readStreamFile.pipe(writeStreamFile);
// 监听结束
readStreamFile.on('end',()=>{
    console.log('拷贝完成✅')
})

const server = http.createServer((req,res)=>{
    if(req.method==='POST'){
        req.pipe(res);  //返回的就是请求体
    }
    if(req.method==='GET'){
        const fileName = path.resolve(__dirname,'data.txt');
        // 读取文件 stream 
        var stream = fs.createReadStream(fileName);
        stream.pipe(res);
    }
})
server.listen(8000,()=>{
    console.log('8080') 
})