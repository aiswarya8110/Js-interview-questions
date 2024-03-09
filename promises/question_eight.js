const promise1 = new Promise((resolve, reject)=>{
    resolve("First");
})

const promise2 = new Promise((resolve, reject)=>{
    resolve(promise1);
})

promise2.then((res)=>{

    return res;
}).then((res)=>{
    console.log(res);
})