//  Primitive

//  there are 7 primitive types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const id =Symbol('123');// symbol datype 
const anotherId=Symbol('123');
console.log(id == anotherId);
console.log(id === anotherId);

let bigInt1 = BigInt(12345678901234567890); // big int data type
let bigInt2 = 12345678901234567890n; // another bigint


// Reference or non primitive datatypes are Array, Objects, Functions  (Non primitive)

const heroes =["Shaktiman","Nagraj","super cammando dhruv"];

let myObj ={
    name:"saroj kumar",
    age : 44
}

let myFunction= function (){
    console.log("Hello world");
}

console.log(typeof anotherId);
console.log(typeof bigInt1);
console.log(typeof heroes);
console.log(typeof myObj );
console.log(typeof myFunction );
