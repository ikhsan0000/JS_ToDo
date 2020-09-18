//Selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listener
todoButton.addEventListener('click', addList);

//Func
function addList (e)
{
    e.preventDefault();    
    console.log('test');
}