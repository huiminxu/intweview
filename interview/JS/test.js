var minWindow = function(s, t) {
    let l=0,r=0;
    const map =new Map();

    for(let i=0;i<t.length;i++){
        map.set(map.has(t[i])?map.get(t[i])+1:1);
    }
    let resourceType = map.size;
    let res='';

    while(r<s.length){
        if(map.has(s[r])){
            map.set(s[r],map.get(s[r])-1);
            if(map.get(s[r]) ===0){
                resourceType--;
            }
            console.log(resourceType);
            while(resourceType===0){
              
                const newRes = s.substring(l,r+1);
                  console.log(l,r+1,newRes);
                if(newRes.length<res || !res){
                    res = newRes;
                }
                if(map.has(s[l])){
                    map.set(s[l],map.get(s[l])+1);
                    if(map.get(s[l]) ===1){
                      resourceType++;  
                    }
                }
                l++;
            }
        }
        r++;
    }
    return res;
};
minWindow("ADOBECODEBANC","ABC")