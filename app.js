const add = document.querySelector('.add');
const rem = document.querySelector('.remove');
const box = document.querySelector('.container')
const body = document.querySelector('body');
const formB = document.querySelector('.form-container');
const inputT = document.querySelector('.inputTi');
const inputA = document.querySelector('.inputAu');
const inputP = document.querySelector('.inputPa');
const inputY = document.querySelector('.inputYa');
const inputR = document.querySelector('.inputRe'); //checkbox
const remList =document.querySelector('.remList');
const dMode = document.querySelector('.darkMode');

let myLibrary = [];

dMode.addEventListener('change',()=>{
  darkMode();
})




class book{
  constructor (title,author,pages,read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  }
}

formB.addEventListener('submit',(e)=>{
    e.preventDefault();
    addBookToLibrary()

})

function addBookToLibrary(){

const newBook = new book(inputT.value,inputA.value,inputY.value,inputP.value,inputR.value);

const bookOne = document.createElement('book')
bookOne.classList.add('book')
box.appendChild(bookOne);

const h1 = document.createElement('h1');
h1.classList.add('h1B');
bookOne.appendChild(h1);
h1.innerHTML = '<p>Book</p>';



const eUl = document.createElement('ul');
eUl.classList.add('eUl');
bookOne.appendChild(eUl);

const titleLi = document.createElement('li');
  titleLi.classList.add('eLi')
  eUl.appendChild(titleLi)
  titleLi.innerText = `Title : ${inputT.value}`;


  const authorLi = document.createElement('li');
  authorLi.classList.add('eLi')
  eUl.appendChild(authorLi)
  authorLi.innerText = `Author : ${inputA.value}`;
  
  const yearLi = document.createElement('li');
  yearLi.classList.add('eLi')
  eUl.appendChild(yearLi)
  yearLi.innerText = `Year : ${inputY.value}`;

  const pagesLi = document.createElement('li');
  pagesLi.classList.add('eLi')
  eUl.appendChild(pagesLi)
  pagesLi.innerText = `Pages : ${inputP.value}`;

  const readLi = document.createElement('li');
  readLi.classList.add('eLi')
  eUl.appendChild(readLi)
  readLi.innerHTML = inputR;

  if(inputR.checked===true){
    readLi.innerText = `Read : read!`; 
  }
  else{readLi.innerText = `Read : not read!`; }

  

// TRASH BUTTON

  const trashBtn = document.createElement('div');
  trashBtn.classList.add('trash-btn');
  trashBtn.innerHTML =(`<i class="fa-solid fa-trash"></i>`);
  eUl.appendChild(trashBtn);

// TRASH BUTTON 
  
// BOOK REMOVE LIST
const remBook = document.createElement('li');
remBook.classList.add('remLi');
remList.appendChild(remBook);
remBook.innerHTML = `<p>Title : ${inputT.value}</p>`; 
  
  const trashBtnList = document.createElement('div');
  trashBtnList.classList.add('trash-btn');
  trashBtnList.innerHTML =(`<i class="fa-solid fa-trash"></i>`);
  remBook.appendChild(trashBtnList);

  trashBtn.addEventListener('click',()=>{
    deleteAll()
  });
  trashBtnList.addEventListener('click',()=>{
    deleteAll()
  })
  
// BOOK REMOVE LIST

function deleteAll(){
    myLibrary.pop();
    console.log('hey there!')
    bookOne.style.display ='none';
    remBook.innerText = '';
    remBook.style.display ='none';
    trashBtnList.innerText = '';
    
  } 

  inputT.value = '';
  inputA.value = '';
  inputP.value = '';
  inputY.value = '';


   
   myLibrary.push(newBook , bookOne)
   console.log(myLibrary)


}



  add.addEventListener('click',()=>{
  document.getElementById('popUp').style.display = "flex";  
}


)
rem.addEventListener('click',()=>{
   
    remList.style.display = "flex";  
}
)

function closeAddList(){
  document.getElementById('popUp').style.display = "none";  
}
function closeRemList(){
  document.querySelector('.remList').style.display = "none";  
}
function darkMode(){
  if(dMode.checked===true){
    document.body.style.backgroundColor = '#181818'
  }else{document.body.style.backgroundColor = 'aliceblue'}
}