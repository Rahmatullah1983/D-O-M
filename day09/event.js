const button = document.querySelector("#submit");
const todolist = document.querySelector('#todo');
const todoNr =document.querySelector('.todoNr b');
const main = document.querySelector('.main');
const item = document.querySelector('.item');

//console.log(todoNr);
//const items = todolist.children;

//button.addEventListener("click", function(){
  //  const newItem= document.createElement('li');
  //  newItem.classList.add('item');
  //  newItem.innerText = `item ${items.length + 1}`;
  //  todolist.appendChild(newItem);
    
//todoNr.innerText=  items.length;
//})

button.addEventListener("click", function() {
  main.style.color= "red";
  main.style.fontSize = '50px';

});


