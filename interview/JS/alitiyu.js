function querySearch(url) {
    // your code are here...
        let index = url.indexOf('?');
        const url2 = url.substring(index+1);
        const arr = url2.split('&');
        const obj={};
        for(let i=0;i<arr.length;i++){
          const keyArr=arr[i].split('=');
          if(keyArr.length==2){
              obj[keyArr[0]] = keyArr[1]
          }
            if(keyArr.length==1){
              if(keyArr[0].indexOf('#')>=0){
                    let key = keyArr[0].split('#')[0];
                  obj[key] ='';
              }
          }
        }
    
        return obj;
  }
const url = 'http://sample.com/?a=1&b=2&c=xx&d#hash';

// 出参格式参考：
const result = { a: '1', b: '2', c: 'xx', d: '' };
console.log(querySearch(url));
// http://sample.com/?a=1&b=2&c=xx&d#hash=2