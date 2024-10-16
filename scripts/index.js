const task = document.getElementsByTagName("form")[0];
const inputTask = document.getElementById("toDoInput");
const taskLabel = document.getElementsByTagName("label")[0];
const taskBtn = document.getElementById("taskBtn");
const container = document.getElementById("container");

const addNewTask = (e) => {
  e.preventDefault();

  const list = document.createElement('article')
  const newTask = {
    todo: inputTask.value,
  };

  list.classList.add('newListItem')
  

  list.innerHTML = ` <ul></ul><button></button><button></button> `;
  container.appendChild('list')

  const crossBtn = document.getElementsByTagName('button')[2]
  const deleteBtn = document.getElementsByTagName('button')[1]
  crossBtn.classList.add('crossBtn')
  crossBtn.innerText = "Done";
deleteBtn.innerText = 'Delete'
  const listItems = document.getElementsByTagName("ul")[0];

  const listElement = document.createElement('li')
  listElement.innerText = newTask.todo;

  listItems.appendChild(listElement);

  task.reset();

  deleteBtn.addEventListener('click', function(){list.remove()})
  crossBtn.addEventListener("click", function () {
    listElement.style.textDecoration = "line-through";
  });
};

taskBtn.addEventListener("click", addNewTask);
