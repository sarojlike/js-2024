
let date1 = new Date();
console.log(date1);
console.log(date1.toString());
console.log(date1.toDateString());
console.log(date1.toLocaleDateString());
console.log(date1.toJSON());


let date2 = new Date(2024,0,12);//month in js starts from 0
console.log(date2.toLocaleDateString());


let date3 = new Date(2024,0,12,5,3);//month in js starts from 0
console.log(date3.toLocaleString());

let myTimeStamp= Date.now();//this will give value in milliseconds

console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));// convert date to seconds not milloseconds


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//completed till 13th video
