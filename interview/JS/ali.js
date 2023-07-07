function compareVersion(version1,version2){
    const arr1 = version1.split('.');
     const arr2 = version2.split('.');
     const length = arr1.length>arr2.length?arr2.length:arr1.length;
     for(let i=0;i<length;i++){
       if(arr1[i]-1>arr2[i]-1){
           return 1;
       }else if(arr1[i]-1<arr2[i]-1){
           return -1;
       }
   }
     if(arr1.length==arr2.length){
       return 0;
   }
      if(arr1.length > arr2.length){
         for(let j=length;j<arr1.length;j++){
           if(parseInt(arr1[j])){
               return 1;
           }
       }
   }
   if(arr1.length < arr2.length){
         for(let j=length;j<arr2.length;j++){
           if(parseInt(arr2[j])){
               return -1;
           }
       }
   }
 
  return 0;

}

console.log(compareVersion('11', '2.0.0')); //0
