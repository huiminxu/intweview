// typeof 识别所有的值类型（undefined、string、number、boolean、symbol），识别函数（function），判断是不是引用类型（object）
// 

function deepClone(obj){
    if(typeof obj !=='object' || obj==null){
        return obj;
    }
    let res;
    if(obj instanceof Array){
        res =[];
    }else{
        res={};
    }
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            // 递归调用！！！
            res[key] = deepClone(obj[key]);
        }
    }
    return res;
}
// function deepClone(obj){
//     if(typeof obj !=='object' || obj==null){
//         return obj;
//     }
//     let res;
//     if(obj instanceof Array){
//         res=[];
//     }else{
//         res={};
//     }
//     for(let key in obj){ 
//         if(obj.hasOwnProperty(key)){
//             res[key]= deepClone(obj[key])
//         }
//     }
//     return res;
// }

const obj={
    name:'age',
    field:{
        class:'red'
    }
}

const obj1 = deepClone(obj);
obj1.field.class='blue';
obj1.name='123';
console.log(obj1);
console.log(obj);
console.log(obj1.field)
console.log(obj.field)