const taskBtn = document.getElementById("taskBtn");
const input = document.getElementById("toDoInput");
const container = document.getElementById("container");
const list = document.getElementById("list");

const addTask = (e) => {
    e.preventDefault();
  
    let newInput = input.value

    const newListItem = document.createElement("li");
    newListItem.innerHTML = `
        <p>${newInput}</p>
        <button class='doneBtn'>Done</button>
        <button class='deleteBtn'>Delete</button>
    `;

    const doneBtn = newListItem.getElementsByClassName('doneBtn')[0];
    const deleteBtn = newListItem.getElementsByClassName('deleteBtn')[0];

    doneBtn.addEventListener('click', () => {
        newListItem.querySelector('p').style.textDecoration = "line-through";
    });

    deleteBtn.addEventListener('click', () => {
        list.removeChild(newListItem);
    });

    list.appendChild(newListItem); 
   
    input.value = "";  
};

taskBtn.addEventListener("click", addTask);
