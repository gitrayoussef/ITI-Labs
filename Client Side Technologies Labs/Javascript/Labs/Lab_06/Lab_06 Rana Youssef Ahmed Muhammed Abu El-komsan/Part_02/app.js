// ******************************************** VARIABLES TO CREATE TASK BOX ********************************************
let tasksContainer = document.createElement("div");
let taskContainer;
let taskDescription;
let icons;
let doneMark;
let deleteMark;

// ******************************************** VARIABLES TO SELECT ELEMENTS ********************************************
let container = document.querySelector(".container");
let form = document.querySelector(".form-container");
let submitBtn = document.querySelector(".submit");
let taskName = document.querySelector("#task-name");

// ******************************************** PROGRAM ********************************************

form.addEventListener("submit", function (e) {
  e.preventDefault();
  createTask();

  doneMark.addEventListener("click", function (e) {
    this.classList.toggle("mark-clicked-btn")
    this.parentElement.parentElement.classList.toggle("checked-task")
    this.parentElement.parentElement.toggleAttribute("disabled"); 
  });


  deleteMark.addEventListener("click", function (e) {
    this.classList.toggle("mark-clicked-btn")
    this.parentElement.parentElement.remove();
  });
});

// ******************************************** FUNCTION TO CREATE ELEMENTS & ADD CLASSES TO HTML ELEMENTS ********************************************
container.prepend(tasksContainer);
function createTask() {
  taskContainer = document.createElement("div");
  taskDescription = document.createElement("p");
  icons = document.createElement("div");
  doneMark = document.createElement("button");
  deleteMark = document.createElement("button");
  taskDescription.textContent = taskName.value;
  doneMark.innerHTML = "/&#10003/".replaceAll("/", "");
  deleteMark.innerHTML = "/&#10006/".replaceAll("/", "");
  tasksContainer.appendChild(taskContainer);
  taskContainer.appendChild(taskDescription);
  taskContainer.appendChild(icons);
  icons.appendChild(doneMark);
  icons.appendChild(deleteMark);
  addStyleAddedTaskes(
    tasksContainer,
    taskContainer,
    icons,
    doneMark,
    deleteMark
  );
  taskName.value = "";
}

function addStyleAddedTaskes(
  tasksContainer,
  taskContainer,
  icons,
  doneMark,
  deleteMark
) {
  tasksContainer.classList.add("tasks");
  taskContainer.classList.add("task");
  taskDescription.classList.add("task-description");
  icons.classList.add("icons");
  doneMark.classList.add("done-mark");
  deleteMark.classList.add("delete-mark");
}
