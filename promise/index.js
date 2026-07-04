// let firstPromis = new Promise((resolve,reject)=>{
//     // console.log("kamlesh");
//     // // resolve(1001);
//     // reject(new Error("internal error hai"))

//     setTimeout(function SayMyName(){
//     console.log("kamlesh");
// },15000)
// resolve(1)

// });


// let firstpromise = new Promise((resolve,reject)=>{
//     let success = false;
//     if(success){
//         resolve("promise fullfilled");
//     }
//     else{
//         reject("promise rejected");
//     }
// });
// firstpromise.then((message)=>{
//     console.log("message for then is "+ message);
// }).then((message)=>{
//     console.log("second message"+message)
//     return 10
// }).then((message)=>{
//     console.log("third message"+message)
//     return 20
// }).catch((error)=>{
//     console.log("error:"+error);
// }).finally((message)=>{
//     console.log("i will run always")
// })


let promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"first");
});
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"second");
});
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(reject,3000,"third");
});

Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values)
}).catch((error)=>{
    console.log("error: "+error);
})