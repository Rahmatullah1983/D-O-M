const collections = document.getElementsByClassName("item");
const todoList = document.getElementById('todo');

const newElement = document.createElement('li');
newElement.classList.add("item")
newElement.innerText = 'item 3'
todoList.appendChild(newElement);
const otherElement = document.createElement('h2');
otherElement.classList.add("item");
newElement.innerText="wow I created newElent";
todoList.append(otherElement);

