const task = document.getElementsByTagName("form")[0];
const inputTask = document.getElementById("toDoInput");
const taskLabel = document.getElementsByTagName("label")[0];
const taskBtn = document.getElementById("taskBtn");
const list = document.getElementById("list");

const addNewTask = (e) => {
  e.preventDefault();

  const newTask = {
    todo: inputTask.value,
  };

  list.classList = "newListItem";

  list.innerHTML = `<button id='crossBtn'></button> 
  <p>${newTask.todo}<p>`;
  const crossBtn = document.getElementById("crossBtn");
  const listElement = document.querySelector('#list p')

  crossBtn.innerText = 'Done'

  task.reset();

  crossBtn.addEventListener('click', function() {
    listElement.style.textDecoration = 'line-through';
  })
};

taskBtn.addEventListener("click", addNewTask);
