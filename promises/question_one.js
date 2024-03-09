const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Resolved');
    },1000)
})

console.log(promise);

promise.then((result)=>{
    console.log(result);
})