var arr=[1,2,3,1,2,3,2];
for(let i=0;i<arr.length;i++){
    if (arr.indexOf(arr[i]) !== i) {
        arr.splice(i, 1);
    }
}

//数组去重