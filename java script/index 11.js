// let obj = {
//     age: 12,
//     wt: 70,
//     ht:180

// }
// console.log(obj)

// obj.color= "white";
// console.log(obj)

//  spread operator//

// let src = {
//     age: 12,
//     wt: 70,
//     ht:180

// }
// let dest = {...src}

// src.age = 70;
// console.log('src:',src)
// console.log('dest:',dest)


//. assign operator //

// let src = {
//     age: 12,
//     wt: 70,
//     ht:180

// }
// let dest = Object.assign({},src);

// src.age = 70;
// console.log('src:',src)
// console.log('dest:',dest)

// iterator //

let src = {
    age: 12,
    wt: 70,
    ht:180

}
let dest ={}

for(let key in src){
    let newKey = key;
    let newValue = src[key];
    dest[newKey]=newValue;
}
console.log('src:',src)
console.log('dest:',dest)