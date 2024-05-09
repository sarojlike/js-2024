// primitive varibles inside js is saved inside stack memory
let  myName="saroj kumar";
let yourName= myName;

console.log("value of myName is "+myName+" value of yourName is "+yourName);

yourName="saroj kumar singh";

console.log("value of myName is "+myName+" value of yourName is "+yourName);


//objects are saved inside heap in ja while variable name is saved inside stack
//variable keeps the copy of heap memory reffrence
let user1 ={
    name: "saroj kumar",
    email: "sarojlike@gmail.com"
}

let user2 =user1;

console.log("user1 email "+user1.email+" user2 email "+user1.email);

user2.email="saroj4bscsaroj4g@gmail.com";

console.log("user1 email "+user1.email+" user2 email "+user1.email);
