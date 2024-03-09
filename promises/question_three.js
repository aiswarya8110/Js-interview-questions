const promise2 = new Promise((resolve, reject)=>{
    resolve("promise has been resolved");
});

console.log(promise2);

promise2.then((value)=>{
    console.log(value);
});

console.log("I am not the promise");