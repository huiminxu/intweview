const { SuccessModel,ErrorModel } = require('../model/resModel');
const loginCheck  = require('../controller/user')
const { set} = require('../db/redis')
const handleUserRouter = (req,res) =>{
    const method = req.method;
    const url = req.url;
    const path = url.split('?')[0];

    //登录用户
    if(method ==='POST' && path==='/api/user/login'){
        console.log('userrouter',req.body);
         const { username,password} = req.body;
        //  const res = loginCheck(username,password);
        //  if(res){
        //      return new SuccessModel();
        //  }else{

        //     return new ErrorModel('错误'); 
        //  }
        const res = loginCheck(username,password);
        return  res.then(data=>{
            if(data.username){
                // 设置 session
                req.session.username = data.username;
                req.session.realname = data.realname;
                //同步到 redis
                set(req.sessionId,req.session)
                return new SuccessModel();
            }else{
                return new ErrorModel('登录失败 ');
            }
        })
        //  if(res){
        //      return new SuccessModel();
        //  }else{

        //     return new ErrorModel('错误'); 
        //  }


    }
    //登录验证的测试
    if(method==='GET' && path==='/api/user/login-test'){
        if(req.session.username){
            return Promise.resolve(new SuccessModel({
                session:req.session
            })) 
        }
        return Promise.resolve(
            new ErrorModel('尚未登录')
        )
    }
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