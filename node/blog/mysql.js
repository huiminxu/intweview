const mysql = require('mysql');

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:'3306',
    database:'myblog'
})

 
con.connect( );

const sql = `select * from user;`

con.query(sql,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)

        }
})
 
con.end(); 