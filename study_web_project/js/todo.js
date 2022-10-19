const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDolist = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos"

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    // console.log(newTodo);
    toDoInput.value = "";
    const newtodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    paintToDo(newTodo);
    toDos.push(newtodoObj);
    saveToDos();
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintToDo(newTodo) {
    // create li, span and stick these. connect newTodo. 
    const li = document.createElement("li");
    const span = document.createElement("span");
    //create button and innertext 
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    li.appendChild(span);
    toDolist.appendChild(li);
    li.appendChild(button);
    button.addEventListener("click",deleteToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// function sayHello(item){
//     console.log("hello", item);
// }

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}







