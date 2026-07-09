// compile time error
// syntax error

// console.log(1;


// run time error
// reference error

// console.log(x)


// try{
//     console.log("starting try error")
//     console.log(x); //error
//     console.log("ending try error")

// }
// catch(err){
//     console.log("error catched here");
//     console.log(err);// show error

// }
// finally{
//     console.log("i will run every time:","i'm inside final block")
// }


//Custom Error//

// try{
//     console.log(x);

// }
// catch(err){
//     throw new Error("Declare first then print");
// }

let errorCode = 100;
if(errorCode == 100){
    throw new Error("Invalid Json")
}