
// 执行时机如何确定


// less to css
const less = {
    ".a": {
      "span": {
        "display": "block"
      },
      ".b": {
        "span": {
          "display": "none"
        }
      }
    }
  }
   
  let    attr='';
  function lessToCSS(less){
    if(less==null){
      return {};
    }
    let result ={};
    if(typeof less==='object'){
      for(let key in less){
        if(less.hasOwnProperty(key)){
          if(typeof less=='string'){
            result[attr] = less;
            attr='';
          }
          attr = attr + ' '+ key + ' '+ lessToCSS(less[key]);
        }

      }
    }

  }

  lessToCSS(less);

   
  // {
  //   ".a span": {
  //     "display": "block"
  //   }
  //   ".a .b span": {
  //     "display": "none"
  //   }
  // }




  // json 键下划线转驼峰
  