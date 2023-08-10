const button = document.querySelector('.submit');
const todolist = document.querySelector('#todo');
const todoNr = document.querySelector('.todoNr b');
const input = document.querySelector(".input");
const items =todolist.children

button.addEventListener("click", function(b){
    b.preventDefault();
    const newItem =  document.createElement('li');
    newItem.classList.add('item');
    newItem.innerText = input.value;
    todolist.appendChild(newItem);
    input.value ="";
    todoNr.innerText = items.length;
    
    newItem.addEventListener("click", deleteItem);

})
for (item of items){
    item.addEventListener("click", deleteItem);
}
function deleteItem(b) {
    b.stopPropagation();
    b.target.remove();
}

