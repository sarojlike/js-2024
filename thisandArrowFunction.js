const user ={
    userName:"Saroj",
    email:"sarojlike",
    welcomeMessage: function(){
        console.log(`Welcome ${this.userName}`);
        console.log(this);
        
    }
}
// user.welcomeMessage();

// user.userName="manoj";
// user.welcomeMessage();

//console.log(this);// this line will print empty but in browser same line will give window object

function anotherUser(){
    let userName ="saroj"
    console.log(this.userName); // this iine will  print undefined
}

// anotherUser();

// simple declaration of arrow function
const simpleUser = ()=>{
    let userName="Saroj"
    console.log(this);// this line will print {}
}

// simpleUser();

// arrow function with return statement
const addNumber1 =(num1,num2)=>{
    return num1+num2;
}

console.log(addNumber1(4,5));

// another way to define arrow function with implicit return
const addNumber2 =(num1,num2)=> num1+num2;

console.log(addNumber2(6,4));


// another way to define arrow function with implicit return
const addNumber3 =(num1,num2)=> (num1+num2);

console.log(addNumber3(6,6));

const callUser = () => ({username: "saroj"})


console.log(callUser());

const loggedInUser = (userName) => { return `Hello ${userName}`};// while explicitly returning curly braces is mandatory



console.log(loggedInUser("saroj"));