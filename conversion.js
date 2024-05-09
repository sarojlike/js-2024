
let score=100;

console.log(typeof score);
console.log(score);

// converting numeric string to a number
let newScore="10";
let valueInNumber=Number(newScore);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//converting alphanumeric string to number
let anotherScore="10ab";
let numberValue=Number(anotherScore);
console.log(typeof numberValue);
console.log(numberValue);

//converting non-numeric string to number
let stringVal="saroj";
let StringToNum= Number(stringVal);
console.log(typeof StringToNum);
console.log(StringToNum);

//converting boolean to number
let booleanVal=true;
let booleanToNumber=Number(booleanVal);
console.log(typeof booleanToNumber);
console.log(booleanToNumber);
// completed till video 6

console.log(+true);// it will print 1
console.log(+"");// it will print 0


