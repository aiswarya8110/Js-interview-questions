function delay (){
    return new Promise((resolve, reject)=>{
        return setTimeout(()=>{
            resolve("hello");
        },1000)
    })
}


const promise = delay();
console.log(promise);

promise.then((value)=>{
    console.log(value);
})