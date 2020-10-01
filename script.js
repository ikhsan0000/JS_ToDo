//Selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filter = document.querySelector("#filter");

//Event Listener
todoButton.addEventListener('click', addList);
todoList.addEventListener('click', deleteCheck);
filter.addEventListener('change', filterHandler);
// document.addEventListener('click', print);


function addList (e)
{
    if(todoInput.value !== "")
    {
        //prevent submit
        e.preventDefault();    

        //todo div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        todoDiv.setAttribute("id", "todo-parent");

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
        fall = target.parentElement;
        fall.classList.add('fall');
        fall.addEventListener('transitionend', function(){
            fall.remove();
        });
        
        // target.parentElement.remove();
    }
    if(target.classList[0] == 'check')
    {
        target.classList.toggle('done');
        var parent = target.parentElement;
        var container = parent.parentElement;
        container.children[0].classList.toggle('completed');
    }
    if(target.classList[0] == 'todo-item')
    {
        target.classList.toggle('completed');
        var sibling = target.nextSibling;
        sibling.children[0].classList.toggle('done');
    }
    filterHandler();
}

function enter (e)
{
    if(e.keyCode === 13)
    {
        e.preventDefault();
        addList(e);
        filterHandler();
    }
}

function filterHandler()
{
    var currentFilter = document.querySelector(".filter").value;
    var allItem = document.querySelectorAll("#todo-parent");
    allItem.forEach(function(item)
    {
        currentItem = item.firstChild;

        if(currentFilter === 'All')
        {
            if(item.classList.contains('hide'))
            {
                item.classList.remove('hide');
            }
        }
        else if(currentFilter === 'Done')
        {
            if(!currentItem.classList.contains('completed'))
            {
                item.classList.add('hide');
            }
            else
            {
                item.classList.remove('hide');
            }
        }
        else
        {
            if(currentItem.classList.contains('completed'))
            {
                item.classList.add('hide');
            }
            else
            {
                item.classList.remove('hide');
            }
        }
    });
    
    
}