var levelOrder = function(root) {
    const bfs = (n)=>{
        if(!n) return;
         const arr = [[n,0]];
         const res=[];
         while(arr.length){
             const [cur,level] = arr.shift();
             if(!res[level]){
                 res[level]=[cur.val];
             }else{
                 res[level].push(cur.val);
             }
             if(cur.left) arr.push([cur.left,level+1]);
             if(cur.right) arr.push([cur.right,level+1]);
         }
         return res;
    }
    return bfs(root);


};
levelOrder([]);
