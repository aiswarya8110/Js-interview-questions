console.log("start");

function func(){
     new Promise((resolve, reject)=>{
        console.log(1);
        resolve("success");
    })
}

console.log("middle");

func().then((value)=>{
    console.log(value)
})