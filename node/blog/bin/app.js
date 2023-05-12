const serverHandle = (req,res)=>{
    console.log('start')
    res.setHeader('Content-type','application/json');
    const resData = {
        name:'test',
        site:'immoc',
        env: process.env.NODE_ENV
    }

    res.end(JSON.stringify(resData))
}

module.exports = serverHandle;