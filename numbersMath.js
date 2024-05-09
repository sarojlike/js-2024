////////////////////////// ============number Operation ===============================///////////////////
const score = 4000000;
console.log(score);

const balance =new Number(100000);
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));

console.log(balance.toLocaleString());

const otherNumber=123.8966;

console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(2));

console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.min(4,2,3,5,1));
console.log(Math.max(4,2,3,5,1));
console.log(Math.random());
console.log((Math.random()*10)+1);

// this code snippet will ensure that generated value will always be between min and max value
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);


