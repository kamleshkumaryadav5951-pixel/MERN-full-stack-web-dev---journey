
//hoisting
// {
// function sayMyName(finalName){
//     console.log(finalName);
// };
// sayMyName("kamlesh");

// }

//variable hosting

// class human {

// }
// const obj1 = new human();


// let greet = function(){
//     console.log("greeting for the day");
// }
// greet();

// function greetme(greet, name){
//     console.log("hello",name);
//     greet();

// }

// function greet(){
//     console.log("greeting for the day");
// };
// greetme(greet,"kamlesh");


// function solve(nums){
//     return function(nums){
//         return nums*nums;
//     }
// }
// let ans = solve(5);
// let finalans = ans(10);
// console.log(finalans);


// const arr = [
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     }
// ]
// let first = arr[2];
// let ans = first(5,10);
// console.log(ans);
 

let obj ={
    wt : 65,
    ht : 180,
    age : 20,
    greet: ()=>{
        console.log("hello kamlesh")
    }

}
console.log(obj.age);
obj.greet();