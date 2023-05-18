const { getList,newBlog } = require('../controller/blog.js') 
const { SuccessModel,ErrorModel } = require('../model/resModel');
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
        const listData = getList(author,keyword);
        return new SuccessModel(listData)

    }
    // 获取博客详情接口
    if(method==='GET' && path==='/api/blog/detail'){
        return {
            msg: '这是博客详情接口'
        }
    }
    //新建一个博客
    if(method ==='POST' && path === '/api/blog/new'){
        console.log('post data');
        const blogData = req.body;
        const blogItem = newBlog(blogData);
        return new SuccessModel(blogItem)
    }
    //更新一个博客
    if(method ==='PUT' && path === '/api/blog/update'){
        return {
            msg:'这是更新博客的接口'
        }
    }
    //删除一个博客
    if(method ==='DELETE' && path === '/api/blog/delete'){
        return {
            msg:'这是删除博客的接口'
        }
    }
}
module.exports = handleBlogRouter;