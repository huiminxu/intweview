const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req,res)=>{
    // post
    if(req.method=='POST'){
        let postData = ""
        console.log('content-type',req.headers['content-type'])
        // 水管
        req.on('data',chunk =>{
            postData+=chunk+toString()
        })
        req.on('end',()=>{
            console.log(postData);
            res.end('hello world')
        })

    }else{
        // get + querystring
        req.query = querystring.parse(req.url.split('?')[1]);
        res.end(JSON.stringify(req.query));

        //  设置返回格式为 JSON
        //  res.setHeader('content-type','application/json')
        res.end('hello world2');
    }

})


server.listen(8000)