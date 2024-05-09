const accountId=144553; // means constant value can not be changed
let accountEmail="sarojlike@gmail.com"; // to declare a variable use let in modern js
var accountPassword="12345";//var can be used but it has a problem with functional and block scope so recommended to not use in modern
accountCity="bokaro";// variable can also be declared like this but its a bad practise
let name; // value inside a declared variable is undefined

console.table([accountId,accountEmail,accountPassword,accountCity,name]);