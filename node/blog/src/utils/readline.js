const fs = require('fs');
const path = require('path');
const readline = require('readline');
//文件名称
const fileName = path.join(__dirname,'../','../','logs','access.log');

//创建 read stream
const readStream = fs.createReadStream(fileName);

//创建 readline 对象
const rl = readline.createInterface({
    input:readStream
})

let chrmoeNum = 0
let sum =0

//逐行提取
rl.on('line',(lineData)=>{
    if(!lineData){
        return;
    }
    sum++;

    const arr = lineData.split('--')
    if(arr[2] && arr[2].indexOf('chrome')>=0){
        //累加chrome 的数量
        chrmoeNum++;
    }
})

// 监听读取完成
rl.on('close',()=>{
    console.log('chrome占比',chrmoeNum,sum,chrmoeNum/sum)
})