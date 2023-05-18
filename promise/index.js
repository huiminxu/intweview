const fs = require('fs');
const path = require('path');


function getFileContent(fileName,callback){
    const fullFileName = path.resolve(__dirname,'files',fileName);
        fs.readFile(fullFileName,(err,data)=>{
            if(err){
                console.log(err);
                return;
            }
            callback( JSON.parse(data.toString()))
        })
}
// callback hell 回调地狱
getFileContent('a.json',aData =>{
    console.log('a data',aData);
    getFileContent(aData.next,bData =>{
        console.log('b data',bData);
        getFileContent(bData.next,cData =>{
            console.log('c data',cData);
        })
    })
})


// 用 promise 获取文件内容
function getFileContentP (fileName){
    const promise = new Promise((resolve,reject)=>{
        const fullFileName = path.resolve(__dirname,'files',fileName);
        fs.readFile(fullFileName,(err,data)=>{
            if(err){
                reject(err);
                return;
            }
            resolve( JSON.parse(data.toString()))
        }) 
    })
    return promise
}

getFileContentP('a.json').then(aData=>{
    console.log(aData)
    return getFileContentP(aData.next)
}).then(bData=>{
    console.log(bData)
    return getFileContentP(bData.next)
}).then(cData=>{
    console.log(cData)
})

// async await koa2

