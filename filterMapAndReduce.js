const myNums=[0,1,2,3,4,5,6,7,8,9,10];

const result = myNums.filter( (num) => {
    if(num%2 === 0){
        return num
    }
})
.map((num)=>{
    return num.toString();
});

console.log(result);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004,price:100 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 ,price:100},
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007,price:200 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 ,price:300},
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014,price:120 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 ,price:300},
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 ,price:500},
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 ,price:100},
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 ,price:200}
  ];


  let titles =books.filter((book)=>{
      return  book.genre === "History"
  })
  .map((book) =>{
    return book.title.toUpperCase();
  }).reduce((acc,item)=>{
       return  acc+" "+item
  },'');

  console.log(titles);

  let bookPrice = books.filter((book) => {
    return book.price>100
  })
  .reduce((acc,book)=>{
    return acc+book.price;
  },0);

  console.log(`All book price except history book is ${bookPrice}`);

  // completed till 31 video