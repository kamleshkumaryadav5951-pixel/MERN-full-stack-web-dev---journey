// let obj = {
//     name : "kamlesh",
//     age: 20,
//     weight:67,
//     height:"6th 1in",
//     greet: function(){
//         console.log("hello kamlesh yadav");
//     }
// };

// for(let key in obj){
//     console.log(key , " ",obj[key]);
// } 



// console.log(obj);
// obj.greet();


// console.log(typeof(obj));

// let arr = [1,2,3,5,4];
// let brr = new Array('kamlesh', 1, true);

// arr.push(7);
// arr.pop();

// brr.splice(1,2,'yadav');
// console.log(brr);
// console.log(arr);
// console.log(brr);
// console.log(typeof(brr));

// let arr = [10,20,30];

// let ansArray = arr.map((number) => {
//     return number*number;
// });
// console.log(ansArray);

// let arr = [20,31,15,23,45,56,44];
// let evenArray = arr.filter((number) => {
//     if(number % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// console.log(evenArray);

// let arr = ['kamlesh',45,'yadav',3];
// let valueArray = arr.filter((value) =>{
//     if(typeof(value) === 'string'){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(valueArray);


// let arr = [10,20,30,40];
// let ans = arr.reduce((acc,curr) =>{
//     return acc + curr;
// } , 0);

// console.log(ans);


// let arr = [2,3,4,17,4,1];

// arr.sort();
// // console.log(arr);

// let arr = [9,7,23,2,5,1];
// let ans = arr.sort((a,b) =>{
//     return a - b;
// });
// console.log(ans);
// console.log(arr.indexOf(9));

// let arr = [6,3,2,6,1,4];
// let ans = arr.find(num => num > 4);

// console.log(ans);


// let arr = [10,20,30,40];
// let lenght = arr.length;

// console.log(lenght);

// let ans = arr.forEach((value,index) => {
//     console.log("number:",value,"index",index);
// });

// let name = "kamlesh";
// for(let val of name){
//     console.log(val);
// }

// let arr = [10,20,30,40,50];

// function getSum(){
//     let len = arr.length;
//     let sum = 0;

//     for(let index = 0; index < len; index++){
//         sum += arr[index];
//     }
//     return sum;
// }
// let totalsum = getSum(arr);
// console.log(totalsum);


let arr = [10,20,30,40,50];

function getSum(){
    let sum = 0;
    arr.forEach((value) =>{
        sum += value;
    });
    return sum;

};
let totalsum = getSum(arr);
console.log(totalsum);
