
if(true){
    let a=10;
    const b=20;
    var c =30;

}
// var and const cannot be accesed out of scope
//console.log(a);
//console.log(b);
// var doesnot follow any scope so avoid using var
console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

one()


console.log(addone(5))

function addone(num){
    return num + 1
}


//this will give error 
//addTwo(5)
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));
