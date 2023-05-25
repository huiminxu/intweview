const crypto = require('crypto');

//密钥
const SECRET_KEY = 'WJiol_8876#';

// md5加密
function md5(content){
    let md5 = crypto.createHash('md');
    return md5.update(content).digest('hex');
}

// 加密函数
function genPassword(password){
    const str=`password=${password}&key=${SECRET_KEY}`
    return md5(str);
}

// const pas = genPassword('abc');

// console.log(pas); 
module.exports={
    genPassword
}