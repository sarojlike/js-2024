
let name="saroj";
let contactN0=50;

console.log("Hello my name is "+name+" and contact no is "+contactN0); // old way to concat strings;

// this operation is called "string interpolation" or "template interpolation" in Js
//${name} is called placeholder
//note write string within backticks
console.log(`Hello my name is ${name} and contact no is ${contactN0}`); // new way to concat or print string 

let myName=new String("saroj_kumar_singh"); // another way to declare string in  js

// various operations on string
console.log(myName.toUpperCase());
console.log(myName.slice(6));
console.log(myName.slice(0,7));
console.log(myName.slice(-5));
console.log(myName.split("_"));
console.log(myName.substring(0,6));
console.log(myName.replace("_"," "));
console.log(myName.replaceAll("_"," "));

//completed till 11th video



