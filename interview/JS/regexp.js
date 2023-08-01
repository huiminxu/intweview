// knowledge  
//  website: regex101.com
//  ?       0/1  
//  *       >=0   
//  +       >=1
//  {2}       2
//  {2,6}   >=2 & <=6
 

//  (ab)+  表示ab 或者 abab 或者 ababab...
//  (dog|cat)  表示 cat 或者 dog
//  a cat｜dog 表示 a cat 或者 dog
 

// [abc]+ 表示 a 或者 ab 或者 ba 或者 abc 或者 c (取值区间为 abc)
// [^0-9] 表示不包含数字字符   \d =[0-9]
// \w  代表英文数字下划线  \s 代表空白符
 
 

// 贪婪与懒惰匹配


 



var content = {
    name:'test',
    age: 18
}

// function(str,func(match,key*,offset,string)){}   
//  key* 参数是匹配正则的() 一个的话只有一个 key ，多个有多个 key
var a = '我叫{{ name}}，我今年 {{ age }} 岁1234'.replace(/\{\{(.*?)\}\}/g,(match,key,key2)=> {
    console.log(match,key,key2,'1');
    return content[key.trim()]})
// 如果是字符串则没有 key* 参数
var b = '<p> Hello World</p>'.replace('Hello',function(match,p,offset,string){
    console.log(match,p,offset,string)
    return 'Good'
})