const { getList,newBlog,getBlogDetail,updateBlog,delblog } = require('../controller/blog.js') 
const { SuccessModel,ErrorModel } = require('../model/resModel');
//统一的登录验证函数
const loginChecked = (req)=>{
    if(!req.session.username){
        return Promise.resolve(
            new ErrorModel('尚未登录')
        )
    }
}

const handleBlogRouter = (req,res) =>{ 
    const method = req.method;
    const url = req.url;
    const path = url.split('?')[0];

    // 获取博客列表接口
    if(method==='GET' && path==='/api/blog/list'){
        // return {
        //     msg: '这是获取博客列表的接口'
        // }
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        // const listData = getList(author,keyword);
        const result = getList(author,keyword);
        return result.then(listData=>{
            return new SuccessModel(listData)
        })
    }
    // 获取博客详情接口
    if(method==='GET' && path==='/api/blog/detail'){
        // return {
        //     msg: '这是博客详情接口'
        // }
        const result = getBlogDetail(req.query.id);
        return result.then(data=>{
            return new SuccessModel(data)
        })
    }
    //新建一个博客
    if(method ==='POST' && path === '/api/blog/new'){
        console.log('post data',req.body);
        // req.body.author ='zhangsan';  假数据
         const loginCheckedResult = loginChecked(req);
         if(loginCheckedResult){
            return loginCheckedResult
         }
         req.body.author =req.session.username;
        const blogData = req.body;
        const blogItem = newBlog(blogData);
        // return new SuccessModel(blogItem)
        return blogItem.then(data=>{
            return new SuccessModel(data)
        })
    }
    //更新一个博客
    if(method ==='PUT' && path === '/api/blog/update'){
        // return {
        //     msg:'这是更新博客的接口'
        // }
        const updateItem = updateBlog(req.query.id,req.body);
        return updateItem.then(data=>{
            if(data){
                return new SuccessModel(data)
            }else{
                return new ErrorModel('更新博客失败')
            }
        })
    }
    //删除一个博客
    if(method ==='DELETE' && path === '/api/blog/delete'){
        // return {
        //     msg:'这是删除博客的接口'
        // }
        const delItem = delblog(req.query.id);
        return delItem.then(data=>{
            if(data){
                return new SuccessModel(data)
            }else{
                return new ErrorModel('删除博客失败')
            }
        })
    }
}
module.exports = handleBlogRouter;