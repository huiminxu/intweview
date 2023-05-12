const querystring = require('querystring');
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const serverHandle = (req,res)=>{
    // 设置返回格式 JSON
    res.setHeader('Content-type','application/json');
    // 解析query
    const url = req.url;
    req.path = url.split('?')[0];

    req.query = querystring.parse(url.split('?')[1])
    // 处理 blog 路由
    const blogData = handleBlogRouter(req,res);
    const userData = handleUserRouter(req,res);
    if(blogData){
        res.end(JSON.stringify(blogData))
    }
    if(userData){ 
        res.end(JSON.stringify(userData))
    }

    // 404
    if(!userData && !blogData){
        res.writeHeader(404,{'Context-type':'text/plain'})
        res.write('404 Not Found\n')
        res.end();
    }
}

module.exports = serverHandle;