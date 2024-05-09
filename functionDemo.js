
//a parametrised function
function sayHello(name){
    console.log(`Hello world by ${name}`);
}

console.log(sayHello("saroj"));

function addTwoNumbers(num1,num2){
    return num1+num2;
}

console.log(addTwoNumbers(10,20));

function calculatePrice(val1,val2,...num){ // the third parameter will take any no. of parameters
    console.log(`val1 is ${val1}`);
    console.log(`val2 is ${val2}`);
    console.log(`num is ${num}`);
}

calculatePrice(200, 400, 500, 2000);

const user = {
    username: "saroj",
    price: 199
}

function handleObject(obj){
    console.log(`Username is ${obj.username} and price is ${obj.price}`);
}

handleObject(user);

const myNewArray = [200, 400, 100, 600]

function printArray(...getArray){
   console.log(getArray);
}

printArray(myNewArray);

//

