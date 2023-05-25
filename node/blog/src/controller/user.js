const { exec ,escape } = require('../db/mysql');
const loginCheck = (username,password)=>{
    // if(username==='zs' && password==='123'){
    //     return true;
    // }else{
    //     return false;
    // }
   //  sql 注入   -- ：注释后面的内容
   //  username： zhangsna';delete from user;--  
   // select username,realname from user where username='zhangsna';delete from user;-- ' and password = '${password}'
   
   // 解决 sql 注入
   // username：'zhangsna\';delete from user;-- '
   //  select username,realname from user where username='zhangsna\';delete from user;-- ' and password = '${password}'
   username = escape(username);
   password= escape(password)
    const sql = `select username,realname from user where username='${username}' and password = '${password}'`
     return exec(sql).then(rows=>{
        return rows[0] || {}
     })

}
module.exports = loginCheck 