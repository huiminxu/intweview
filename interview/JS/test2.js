function A(...args){
    const arr = args;
    console.log(typeof arr);
    arr.push('test')
    console.log(arr);
    console.log(...args);
}
A(1,2,3);
A(2);
A(7,8,9,10,11,12,'1')

// typeof