var content = {
    name:'test',
    age: 18
}

// function(str,func(match,key*,offset,string)){}   
//  key* 参数是匹配正则的() 一个的话只有一个 key ，多个有多个 key
var a = '我叫{{ name}}，我今年 {{ age }} 岁1234'.replace(/\{\{(.*?)\}\}/g,(match,key,key2)=> {
    console.log(match,key,key2);
    return content[key.trim()]})
// 如果是字符串则没有 key* 参数
var b = '<p> Hello World</p>'.replace('Hello',function(match,p,offset,string){
    console.log(match,p,offset,string)
    return 'Good'
})