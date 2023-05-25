const querystring = require('querystring');
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const { access} = require('./src/utils/log');
const getPostData =(req,res)=>{
    let postData=''
    const promise = new Promise((resolve,reject)=>{
        if(req.method==='POST' || req.method==='PUT'){
            req.on('data',chunk=>{
                postData+=chunk.toString()
            })
            req.on('end',()=>{
                if(!postData){
                    resolve({})
                }else{
                    resolve(JSON.parse(postData))
                }
            })
        }else{
            resolve({})
        }
    });
    return promise
}
const SESSION_DATA ={}
const serverHandle = (req,res)=>{
    // access 日志
    access(`access`)

    // 设置返回格式 JSON
    res.setHeader('Content-type','application/json');
    // 解析query
    const url = req.url;
    req.path = url.split('?')[0];

    req.query = querystring.parse(url.split('?')[1])

    const getCookieExpires = ()=>{
        const d = new Date();
        d.setTime(d.getTime() + (24*60*60*1000))
        console.log('d.toGMTString() is ',d.toGMTString())
        return d.toGMTString();
    }
   //解析 cookie
   req.cookie={}
   const cookieStr = req.headers.cookie || ''
   cookieStr.split(';').forEach(item =>{
    if(!item){
        return;
    }
    const arr = item.split('=')
    const key = arr[0].trim();
    const val = arr[1].trim();
    req.cookie[key]= val
   })
    //处理 session
     let userId = req.cookie.userId
     let needSetCookie = false
     if(userId){
        if(SESSION_DATA[userId]){
           req.session =SESSION_DATA[userId]
        }else{
            SESSION_DATA[userId]={}
            req.session =SESSION_DATA[userId]
        }
     }else{
        needSetCookie= true
        userId = Date.now()+'_'+Math.random()
        SESSION_DATA[userId]={}
        req.session =SESSION_DATA[userId]
     }
    
    
    //处理 postData
    getPostData(req).then(postData=>{
        console.log('getPostData',postData)
        req.body = postData;
        // 处理 blog 路由
        // const blogData = handleBlogRouter(req,res);
        // if(blogData){
            //     res.end(JSON.stringify(blogData))
        // }
        const blogResult = handleBlogRouter(req,res);
        if(blogResult){
            if(needSetCookie){
                res.setHeader('Set-Cookie',`userid=${userId};path=/;httpOnly;expires=${getCookieExpires()}`)
            }
            blogResult.then(blogData=>{
                    res.end(JSON.stringify(blogData))
            })
            return;
        }

        // 处理 user 路由
        // const userData = handleUserRouter(req,res);
        // if(userData){    
        //     res.end(JSON.stringify(userData))
        // }

        const userResult = handleUserRouter(req,res);
        if(userResult){
            if(needSetCookie){
                res.setHeader('Set-Cookie',`userid=${userId};path=/;httpOnly;expires=${getCookieExpires()}`)
            }
            userResult.then(userData=>{
                res.end(JSON.stringify(userData))
            })
            return;
        }

        // 404 
        if(!userData && !blogResult){
            res.writeHeader(404,{'Context-type':'text/plain'})
            res.write('404 Not Found\n')
            res.end();
        }
    })
}

module.exports = serverHandle;