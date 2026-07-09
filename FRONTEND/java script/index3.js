// //function defination
// function SayMyName(){
//     console.log("kamlesh");
// }

// //function call

// SayMyName();

// function nums(){
//     for(let i = 0; i<10;i++){
//         console.log(i);
//     }
// }
// nums();

// function printnums(num){
//     console.log("printing number:" ,num);
// }
// printnums(5);

// function getAverage(num1,num2){
//     let average = (num1 + num2)/2;
//     console.log(average);
// }
// getAverage(3,5);

//return fun.
// function getSum(a,b,c){
//     let sum = a+b+c;
//     return sum;
// }
// let ans = getSum(3,4,2);
// console.log(ans);

// function FullName(firstname,lastname){
//     let fullname= firstname + " "+lastname;
//     return fullname;
// }
// let ans = FullName("kamlesh","yadav");
// console.log(ans);

// function GetMultiplication(a,b){
//     return a*b;
// }
// console.log(GetMultiplication(3,4));

// const getMultiplication = function (a,b){
//     return a*b;
// }
// let ans = getMultiplication(3,5);
// console.log(ans);

let getExp = (x,y) => {
    let ans = x**y;
    return ans;
}
console.log(getExp(3,4));