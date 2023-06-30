const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  event.preventDefault();
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.id = newToDoObj.id;
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  span.innerText = newToDoObj.text;
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObject = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObject);
  paintToDo(newToDoObject);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));

if (savedToDos) {
  // const parsedToDos = JSON.parse(savedToDos);
  toDos = savedToDos;
  savedToDos.forEach(paintToDo);
}
