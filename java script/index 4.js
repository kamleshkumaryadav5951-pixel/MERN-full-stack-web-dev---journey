// let obj = {
//     name : "kamlesh",
//     age: 20,
//     weight:67,
//     height:"6th 1in",
//     greet: function(){
//         console.log("hello kamlesh yadav")
//     }
// };
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

let arr = ['kamlesh',45,'yadav',3];
let valueArray = arr.filter((value) =>{
    if(typeof(value) === 'string'){
        return true;
    }
    else{
        return false;
    }
});
console.log(valueArray);
