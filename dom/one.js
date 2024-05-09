
//selecting element by id
const firstHeading = document.getElementById('first');
  console.log(firstHeading);
  console.log(firstHeading.id);
  console.log(firstHeading.className);
  //changing style of an html element 
  firstHeading.style.backgroundColor='green'

  //getting and setting attribute of diffrent dom elements
  let secondHeading =document.getElementById('second');
  console.log(secondHeading.getAttribute('id'));
  console.log(secondHeading.getAttribute('class'));
  secondHeading.setAttribute('class','changedclass');//this line will override if any privious class is there on element
  secondHeading.setAttribute('class','secondHead changedclass');// this line will keep the privious and new both class


  let thirdHeading = document.getElementById('third');
  console.log(thirdHeading.innerText);//innerText will bring only visibletext
  console.log(thirdHeading.textContent);//textContent will bring visible and hidden text both
  console.log(thirdHeading.innerHTML);//innerHTML will bring HTml text along with tags and attributes

//getting element by class name and performing diffrent operation
  let fourthElement = document.getElementsByClassName('fourthClass');
  console.log(fourthElement); // this will give HTML collection

  //these line will print undefined as the retuurned element is a HTML collection
  console.log(fourthElement.innerText);
  console.log(fourthElement.textContent);
  console.log(fourthElement.innerHTML);

  const firstQuerySelector =document.querySelector('h2'); // querySelector will bring first h2 element
  console.log(firstQuerySelector);
  
  const secondQuerySelector =document.querySelector('#first');// using querySelector with id of DOM element
  console.log(secondQuerySelector);

  const thirdQuerySelector =document.querySelector('.fourthClass');//using querySelector with class of DOM element

  console.log(thirdQuerySelector);
  
  console.log(thirdQuerySelector.innerText);
  console.log(thirdQuerySelector.textContent);
  console.log(thirdQuerySelector.innerHTML);

  const passwordFeild =document.querySelector('input[type="password"]');

  console.log(passwordFeild);

  let ulInnerText =document.querySelector('ul').querySelector('li').innerText;

  console.log(ulInnerText);

  document.querySelector('ul').querySelector('li').style.backgroundColor="green";

// this will provide a nodeList which cannot be accesed directly note:-node list is not an array
  const allH2s = document.querySelectorAll('h2'); //this will select all h2 in document

console.log(allH2s[0].innerText);//proper way to acces element in Node list

allH2s.forEach((val)=>{
    console.log(val);
})



const listIteamCollection = document.getElementsByClassName('list-item');// this line will give html Collection not Array
const liArray = Array.from(listIteamCollection);//converting HTML collection to array
liArray.forEach((iteam)=>{
    console.log(iteam);
})



  
  