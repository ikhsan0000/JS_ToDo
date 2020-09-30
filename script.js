//Selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listener
todoButton.addEventListener('click', addList);
todoList.addEventListener('click', deleteCheck);

//Func
function addList (e)
{
    if(todoInput.value !== "")
    {
        //prevent submit
        e.preventDefault();    

        //todo div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        //create list
        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        todoInput.value = "";
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        
        //button group
        const buttonDiv = document.createElement("div");
        buttonDiv.classList.add("button-container");


        //check button
        const checkButton = document.createElement("i");
        checkButton.classList.add('check', 'far', 'fa-check-square', 'fa-2x');
        buttonDiv.appendChild(checkButton);



        //delete button
        const deleteButton = document.createElement("i");
        deleteButton.classList.add('delete', 'fas', 'fa-trash', 'fa-2x');
        buttonDiv.appendChild(deleteButton);


        todoDiv.appendChild(buttonDiv);
    

        // buttonDiv.appendChild(checkButton);
        // buttonDiv.appendChild(deleteButton);

        //append to list
        todoList.appendChild(todoDiv);
    }
   
}

function deleteCheck (e)
{
    var target = e.target
    if(target.classList[0] == 'delete')
    {
        target = target.parentElement;
        target.parentElement.remove();
    }
    if(target.classList[0] == 'check')
    {
        target.classList.toggle('done');
        var parent = target.parentElement;
        var container = parent.parentElement;
        container.children[0].classList.toggle('completed');
    }
}