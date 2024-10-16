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

  list.innerHTML = ` <ul></ul><button></button> `;

  const crossBtn = document.querySelector("div button");
  crossBtn.classList = "crossBtn";
  crossBtn.innerText = "Done";

  const listItems = document.getElementsByTagName("ul")[0];

  const listElement = document.createElement('li')
  listElement.innerText = newTask.todo;

  listItems.appendChild(listElement);

  task.reset();

  crossBtn.addEventListener("click", function () {
    listElement.style.textDecoration = "line-through";
  });
};

taskBtn.addEventListener("click", addNewTask);
