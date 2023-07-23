// 冒泡排序时间复杂度 O(n^2)
var arr=[911,520,888,666,555,2323];

function babbbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
  
    }   
    return arr;
}

console.log(babbbleSort(arr))
// [520, 555, 666, 888, 911, 2323]