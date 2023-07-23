const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function cancelTodo(event) {
  event.preventDefault();
  const li = event.target.parentElement;
  const span = li.querySelector("span");
  span.style.textDecoration = event.target.checked ? "line-through" : "none";
  selectedIndex = toDos.findIndex((item) => item.id === Number(li.id));
  toDos[selectedIndex].cancel
    ? (toDos[selectedIndex].cancel = false)
    : (toDos[selectedIndex].cancel = true);
  saveToDos();
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
  const checkbox = document.createElement("input");

  li.id = newToDoObj.id;

  checkbox.type = "checkbox";
  checkbox.className = "todo-checkbox";
  checkbox.addEventListener("change", cancelTodo);
  checkbox.checked = newToDoObj.cancel;

  button.innerText = "x";
  button.addEventListener("click", deleteTodo);
  button.className = "todo-button";

  span.innerText = newToDoObj.text;
  span.className = "todo-span";
  span.style.textDecoration = newToDoObj.cancel ? "line-through" : "none";

  li.appendChild(checkbox);
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
    cancel: false,
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
