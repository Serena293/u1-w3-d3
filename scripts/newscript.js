const taskBtn = document.getElementById("taskBtn");
const input = document.getElementById("toDoInput");
const list = document.getElementById("list");

const addTask = (e) => {
  e.preventDefault();

  const newInput = input.value.trim(); // Trim input to remove leading/trailing spaces

  if (newInput === "") {
    alert("Please insert a task");
  } else {
    list.style.display = "block";
    const newListItem = document.createElement("li");
    newListItem.innerHTML = `
        <p>${newInput}</p>
        <button class='doneBtn'>Done</button>
        <button class='deleteBtn'>Delete</button>
    `;

    // Correctly select buttons by their class names
    const doneBtn = newListItem.querySelector(".doneBtn");
    const deleteBtn = newListItem.querySelector(".deleteBtn");

    // Add event listeners
    doneBtn.addEventListener("click", () => {
      newListItem.querySelector("p").style.textDecoration = "line-through";
    });

    deleteBtn.addEventListener("click", () => {
      list.removeChild(newListItem);

      // Hide the list only if no tasks remain
      if (list.children.length === 0) {
        list.style.display = "none";
      }
    });

    list.appendChild(newListItem);

    input.value = ""; // Clear the input field
    input.focus(); // Set focus back to the input field
  }
};

taskBtn.addEventListener("click", addTask);
