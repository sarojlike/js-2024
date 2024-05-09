
// falsy values below values always gives false when put inside if() statement

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

let userEmail="saroj@abc.com";

if(userEmail){
    console.log("truthy value");
}

let userName="";
//this will never execute as single space string is falsy value
if(userName){
    console.log("truthy value");
}

let myObj={

};
// check if object is empty
if(Object.keys(myObj).length ==0){
    console.log("object is empty");
}

let fruits=[];

if(fruits.length == 0){
    console.log("array is empty");
}

// Nullish Coalescing Operator (??): null undefined
//this operator will always assign first not null value
let val = null ?? 20;

let val2 = 20 ?? null;

console.log(`value of val1 is ${val} and val2 is ${val2}` );
// completed till video 26