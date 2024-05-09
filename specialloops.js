//for off loop which applies on arry or object

const arr =[1,2,3,4,5];

for (const val of arr) {
    console.log(val);
}

const greetings="Hello world";

for (const greet of greetings) {
    console.log(greet);
}

//setting a map
const map = new Map();
map.set("in","India");
map.set("us","America");
map.set("fr","France");
map.set("uk","United Kingdom");

// iterating a map in map using for off loop
for (const [key,value] of map) {
    
    console.log(key +" "+value);
}



// iterating through an object and an array using for in loop
//Note :- we can't iterate a map using for in loop
const user ={
    name:"saroj kumar",
    phone: 9999454602,
    email: "sarojlike@gmail.com"
}

for (const key in user) {
    
    console.log(`key is ${key} and value is ${user[key]}`);    
    
}

const coding =["js","java","C++","python"];

for (const key in coding) {
   
    console.log(`key is ${key} and value is ${coding[key]}`);  
}

// for each loop demo

coding.forEach((element) => {
    console.log(element);
});

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
];

myCoding.forEach((element) => {
   // console.log(element.languageName);
});
//for each never returns a value
const languages = myCoding.forEach((element) => {
    return element.languageName;
});

console.log(languages);