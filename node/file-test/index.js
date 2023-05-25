const fs= require('fs');
const path = require('path');
const fileName = path.resolve(__dirname,'data.txt');

//读取内容 ,读取数据太多？？
fs.readFile(fileName,(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    // data 二进制类型，需要转为字符串
    console.log(data.toString());
})


//写入内容，写入内容太大？？
const content ='这是写入的内容';
const opt={
    flag:'a' // 追加，覆盖 ‘w’
}
fs.writeFile(fileName,content,opt,(err)=>{
    if(err){
        console.log(err);
        return;
    }})


// 判断文件是否存在
fs.exists(fileName,(exist)=>{
    console.log('exist',exist);
})