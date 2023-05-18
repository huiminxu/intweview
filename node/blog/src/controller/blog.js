const { exec } = require('../db/mysql.js');
const getList = (author,keyword) =>{
    // 先返回假数据
    // return [{
    //     id:1,
    //     title:'标题A',
    //     content:'内容',
    //     createTime:15466106811113,
    //     author:'章三'
    // },{
    //     id:2,
    //     title:'标题B',
    //     content:'内容2',
    //     createTime:154661010524373,
    //     author:'李四'
    // }]
    let sql =`select * from blog where 1=1 `;
    if(author){
        sql+=`and author='${author}' `
    }
    if(keyword){
        sql+=`and title like '%${keyword}%' `
    }
    sql+='order by createTime desc;'
    
    //返回的是 promise
    return exec(sql); 
} 
const getBlogDetail = (id)=>{
    let sql =`select * from blog where id=${id}`;
    return exec(sql).then(rows=>{
        return rows[0];
    })
}
const newBlog =(blogData={})=>{
    const { title,content,author} = blogData
    const createTime = Date.now();
    let sql =`insert into blog (title,content,createTime,author) values ('${title}','${content}',${createTime},'${author}')`;
    return exec(sql).then(data=>{
        return  {
            id: data.insertId
        }
    });
//    return {
//     id:3,

//    }
}
const updateBlog =(id,blogData={})=>{
    const { title,content} = blogData;
    const sql =`update blog set title='${title}',content='${content}' where id=${id}`
    return exec(sql).then(data=>{
        // return true;
        if(data.affectedRows>0){
            return true;
        }else{
            return false;

        }
    })
}
const delblog = (id)=>{
     const sql = `delete from blog where id=${id}`
     return exec(sql).then(data=>{
        if(data.affectedRows>0){
            return true;
        }else{
            return false;

        }
     })
}
module.exports ={
    getList,
    newBlog,
    getBlogDetail,
    updateBlog,
    delblog
    // getBlogDetail
}

