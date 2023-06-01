class JQuery{
    constructor(selector){
        const result = document.querySelectorAll(selector);
        const length = result.length;
        for(let i=0; i<length;i++){
            this[i] = result[i]
        }
        this.length = length;
    }
    //类数组
    get(index){
        return this[index]
    }

    each(fn){
        for(let i=0;i<this.length;i++){
            const elem =  this[i];
            fn(elem)
        }
    }

    on(type,fn){
        return this.each(elem=>{
            elem.addEventListener(type,fn,false);
        })
    }

    // 扩展 DOM API
}


// const $p = new JQuery('p');
// $p.get(1);
// $p.each((elem)=>console.log(elem.nodeName))
// $p.on('click',()=> alert('clicked'))


// 插件

JQuery.prototype.dialog= function(info){
    alert(info)
}

// 扩展性
class MyJquery extends JQuery{
    
}