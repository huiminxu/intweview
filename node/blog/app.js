const querystring = require('querystring');
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
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
const serverHandle = (req,res)=>{
    // 设置返回格式 JSON
    res.setHeader('Content-type','application/json');
    // 解析query
    const url = req.url;
    req.path = url.split('?')[0];

    req.query = querystring.parse(url.split('?')[1])

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
            blogResult.then(blogData=>{
                    res.end(JSON.stringify(blogData))
            })
            return;
        }

        // 处理 user 路由
        const userData = handleUserRouter(req,res);
        if(userData){    
            res.end(JSON.stringify(userData))
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