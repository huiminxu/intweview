const handleUserRouter = (req,res) =>{
    const method = req.method;
    const url = req.url;
    const path = url.split('?')[0];

    // 获取用户列表接口
    if(method==='GET' && path==='/api/user/list'){
        return {
            msg: '这是获取用户列表的接口'
        }
    }
    // 获取用户详情接口
    if(method==='GET' && path==='/api/user/detail'){
        return {
            msg: '这是用户详情接口'
        }
    }
    //新建一个用户
    if(method ==='POST' && path === '/api/user/new'){
        return {
            msg:'这是新建用户的接口'
        }
    }
    //更新一个用户
    if(method ==='PUT' && path === '/api/user/update'){
        return {
            msg:'这是更新用户的接口'
        }
    }
    //删除一个用户
    if(method ==='DELETE' && path === '/api/user/delete'){
        return {
            msg:'这是删除用户的接口'
        }
    }
}
module.exports = handleUserRouter;