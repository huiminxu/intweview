setTimeout(()=>{
    console.log(1)
},100);
new Promise(
    (resolve,reject)=>{
        console.log(2)
        resolve();
        console.log(3);
    }
).then(()=>{
    new Promise(
        (resolve,reject)=>{
            console.log(4);
            setTimeout(()=>{
                console.log(5)
            },1)
            resolve();
        }
       
    )
    console.log(6)
})

console.log(7)
console.log(8)