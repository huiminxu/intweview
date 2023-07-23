// 插入排序 时间复杂度 O(n^2)  空间复杂度 O（1）
let arr=[3,6,7,1,2,68,128,9,8 ];
function insertionSort(arr){
    let preIndex,current;
    for(let i=1;i<arr.length;i++){
        preIndex = i-1;
        current = arr[i];
        while(preIndex>=0 && arr[preIndex]>current){
            arr[preIndex+1]=arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
}


insertionSort(arr);
console.log(arr);