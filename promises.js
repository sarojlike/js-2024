//A Promise is an object representing the eventual completion or failure of an asynchronous operation
// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.

//creating a promise Note this promise will not work 
const promiseOne = new Promise(function(resove,reject){
    setTimeout(function(){
        console.log('promiseOne created');
    },1000)

});

//calling the promise
//here this will never call the promise because promise one has never called resolve
promiseOne.then(function(){
    console.log("promiseone consumed");
})

//creating promise with resolve
const promiseTwo =new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("promiseTwo created");
    resolve();//calling resolve or reject is mandatory
  },1000)  
});
//calling promise2
promiseTwo.then(function(){
    console.log("promiseTwo consumed"); 
})

//creating a promise and calling it at sametime wiith then
new Promise(function (resolve,reject) {
    setTimeout(function(){
        console.log("promiseThree created");
        resolve();
    },1000)
}).then(function(){
    console.log("promise three consumed");
    
});

const user ={
    name:"saroj kumar",
    email:"sarojlike@gmail.com"
}
//passing data from promise to caller
const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(user)
    },1000)
})
//printing simple response in promise
promiseFour.then((resp)=>{
    console.log(resp);
})

//then chaining with return in first then and log in second then
promiseFour.then((resp)=>{
    return resp.name;
}).then((resp)=>{
    console.log(resp);
});

// this promise is throwing error or exception
const promiseFive = new Promise((resolve,reject)=>{
    let error=true;
    setTimeout(()=>{
        if(!error){
            resolve(user);
        }else{
            reject('ERROR:something went wrong')
        }
    },1000);
});

//calling promise with catch and finally clause
promiseFive.then((data)=>{
    return data.name;
}).then((name)=>{
    console.log(name);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("finally block executes always");
})


const promiseSix = new Promise((resolve,reject)=>{
    let error=true;
    setTimeout(()=>{
        if(!error){
            resolve(user);
        }else{
            reject("ERROR:jS WENT WRONG")
        }
    },1000);
});

//calling promise with asyn await
//remember to put the calling block in try catch or it will give error
async function consumePromiseSix(){
    try {
        const response = await promiseSix;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
   
}

consumePromiseSix();

// calling an api with asyn await
async function getAllUsers(){
    try {
       const response = await fetch("https://jsonplaceholder.typicode.com/users");
       //await here is necessary because .json() method takes time to process
       const data= await response.json(); 
       console.log(data);
    } catch (error) {
        console.log("E;",error);
    }
   
}

getAllUsers();

//calling api with fetch and then

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    console.log("====================== calling api with fetch ===============");
    return response.json();
   //console.log(response);
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("E;",error);
})