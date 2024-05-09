const user = new Object(); //this is for declaring a singelton object
const anotherUser={}; // this way also we can declare an object

user.id="123abc";
user.name="saroj kumar";
user.isLoggedIn=false;

console.log(user);

//declaring a nested object
const regularUser={
    emaii:"sarojlike@gmail.com",
    fullName:{
        firstName:"saroj",
        lastName:"kumar"
    }
}

console.log(regularUser.fullName.firstName +" "+regularUser.fullName.lastName);

const obj1 ={
    1:"a",
    2:"b",
    3:"c",
}

const obj2 ={
    4:"d",
    5:"e",
    6:"f",
}

const obj3 ={
    1:"g",
    2:"h",
    3:"i",
}
// merging two objects into one with their name also
const obj4 ={obj1 ,obj2 }

console.log(obj4);

// this will merege the content of objects without their name
const obj5 = Object.assign({},obj1,obj2,obj3);

console.log(obj5);

const obj6 ={...obj1,...obj2,...obj3} // merging object by spred operation

console.log(obj6);

// array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[0].email);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('email'));



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "saroj"
}

//destructuring course object

const {courseInstructor}= course;

console.log(courseInstructor);//instead of writing course.courseInstructor we can used destructured variable

//another way of destructuring course object

const {courseInstructor:instructor}= course;

console.log(instructor);

//completed till 18th video





