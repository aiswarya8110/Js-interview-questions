const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(["mango", "banana", "apple"]);
    },1000)
})

promise.then((data)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(data);
        },2000)
    })
}).then((data)=>{
    return new Promise((resolve)=>{
        resolve("data submitted");
    })
}).then((res)=>{
    console.log(res);
})


console.log('end');