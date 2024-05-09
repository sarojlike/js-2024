// objects can be singelton in js

//object creation through literal

const mySymbol = Symbol("key1");

const user={
    name :"saroj",
    age:40,
    email:"sarojlike@gmail.com",
    lastLoginDays:["sunday","monday"],
    [mySymbol]:"just a symbol"

}

//two ways to acees objects property
console.log(user.name);
console.log(user["name"]);
console.log(user[mySymbol]); // printing symbol type value from object /symbol type value can be acessed using only []

user.name="saroj kumar singh"; //assining new value inside name key 

console.log(user);

//Object.freeze(user); // this function will make the js object immutable;

// user.name="saroj kumar"; //changing value after freezing the object

// console.log(user);

//adding new key to js object using function
user.greeting = function(){
    console.log(`hello user ${this.name}`);
}

console.log(user.greeting());

console.log(user);



