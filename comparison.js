
console.log("2">1);// here conversion happens automatically so it will print true
console.log("02">1);// here conversion happens automatically so it will print true
console.log(null==0);// it will print false
console.log(null>0);// it will print false
console.log(null>=0);// it will print true because it does conversion first then does comparision
console.log(undefined==0);// it will print false
console.log(undefined>0);// it will print false
console.log(undefined<0);// it will print false
console.log("2" ===2);// it will print false because === does strict check
