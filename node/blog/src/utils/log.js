  const fs =require('fs');
  const path = require('path')

  function writeLog(writeStreamFile,log){
    writeStreamFile.write(log+'\n');
  }

// 生成 write stream
  function createWriteStream(fileName){
    const fullName = path.join(__dirname,'../','../','logs',fileName);
    const writeStream = fs.createWriteStream(fullName,{flags:'a'})
    return writeStream;
  }

  const accessWriteStream = createWriteStream('access.log');
  //写访问日志
  function access(log){
    writeLog(accessWriteStream,log);
  }
  module.exports={
    access
  }