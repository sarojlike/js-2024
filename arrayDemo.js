
const myArr=[1,2,3,4,5]; //js array are resizable and hetrogenious
console.log("first element of array "+myArr[0]);

const myHeros=["shaktiman","Nagraj","Dhruv",false,1,2]; // a hetrogenious array
const anotherArray= new Array(1,2,3,4); // another way to declare array

console.log(`Array before push operation ${myArr}`);

myArr.push(6);// push adds an element to existing array
console.log(`Array after push operation ${myArr}`);

myArr.pop();// pop doesn't takes a parameter just removes the last element

console.log(`Array after pop operation ${myArr}`);

myArr.unshift(0)//unshift adds an element to begining of array and shifts each element

console.log(`Array after unshift operation ${myArr}`);

myArr.shift(0);

console.log(`Array after shift operation ${myArr}`);// removes element from beggining

console.log(myArr.includes(9));

console.log(myArr.indexOf(9));

const newArray=myArr.join();//join converts an array to String

console.log(newArray);

console.log(`Array before slice operation ${myArr}`);

const slicedArray = myArr.slice(1,3);

console.log(`sliced Array  ${slicedArray}`);

console.log(`orignal Array after slice operation ${myArr}`);

const splicedArray = myArr.splice(1,3);// Note: splice will change the orignal array but slice will not

console.log(`spliced Array  ${splicedArray}`);

console.log(`orignal Array after splice operation ${myArr}`);









