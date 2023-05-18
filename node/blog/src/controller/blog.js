const getList = (author,keyword) =>{
    // 先返回假数据
    return [{
        id:1,
        title:'标题A',
        content:'内容',
        createTime:15466106811113,
        author:'章三'
    },{
        id:2,
        title:'标题B',
        content:'内容2',
        createTime:154661010524373,
        author:'李四'
    }]
}

const newBlog =(blogData={})=>{
   return {
    id:3,

   }
}
module.exports ={
    getList,
    newBlog
    // getBlogDetail
}

