
const marvelHeros= ["thor","ironman","spiderman"];
const dcHeros= ["superMan","flash","batman"];

marvelHeros.push(dcHeros);// this line will push the whole array at the last index of first array

console.log(marvelHeros);

const personArray1 =["saroj","manoj","manju","onkar"];
const personArray2 =["d.p.singh","sushila devi","sheetal"];
const personArray3 =["Riya","Bholu","Maggie","piku","kiku"];

const concatedArray=personArray1.concat(personArray2);

console.log(`concated array is ${concatedArray}`);

// this is known as spread operation for arrays it merges sevral arrays into one
const allPersons= [...personArray1, ...personArray2, ...personArray3]; 

console.log(`array after drop operation ${allPersons}`);

let nestedArray =[1,2,3,[4,5,6],7,[8,9,[10,11,12]]];
const flatedArray=nestedArray.flat(Infinity);// this will flatten the array it takes depth as parameter

console.log(`flatted array ${flatedArray}`);

console.log(Array.isArray("Saroj"));

console.log(Array.from("Saroj"));

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));




