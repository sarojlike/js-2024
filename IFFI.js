//Immidietly invoked function Expression (IIFE)
//if we want to declare a function  and execute it immidietly than it is known as IIFE
// This type of function is used to protect from global scope pollution

//Named IFFI
(function connectToDB(){
    console.log("connected to DB1");
})();


// Unnamed IFFI using arrow function
(()=>{
    console.log("connected to DB2");
})();

//parameterised un-named IFFI
((name)=>{
    console.log(`welcome ${name}`);
})("saroj");