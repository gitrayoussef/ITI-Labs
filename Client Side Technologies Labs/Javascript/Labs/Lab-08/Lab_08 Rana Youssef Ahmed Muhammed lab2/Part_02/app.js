// ******************************************** VARIABLES TO CREATE TASK BOX ********************************************
let tasksContainer = document.createElement("div");
let container = document.querySelector(".container");
let form = document.querySelector(".form-container");
let submitBtn = document.querySelector(".submit");
let taskName = document.querySelector("#task-name");
let taskNumber;

// ******************************************** PROGRAM ********************************************

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (taskName.value) {
    createTask();
  }
});

window.addEventListener("load", function (e) {
  retriveLocalStorageData();
});

// ******************************************** FUNCTION TO CREATE ELEMENTS & ADD CLASSES TO HTML ELEMENTS ********************************************
container.prepend(tasksContainer);

function createTask(initvalue) {
  let taskContainer = document.createElement("div");
  let taskDescription = document.createElement("p");
  let icons = document.createElement("div");
  let doneMark = document.createElement("button");
  let deleteMark = document.createElement("button");
  taskDescription.textContent = taskName.value;

  // if exist create a local storage property having a task description as a value
  if (initvalue) {
    taskDescription.textContent = initvalue;
  }
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
    taskDescription,
    icons,
    doneMark,
    deleteMark
  );

  // starting to create a local storage property with a counter at the end
  if (taskName.value != false) {
    window.localStorage.setItem(
      `${"task" + taskNumber++}`,
      `${[taskName.value]}`
    );
  }
  doneMark.addEventListener("click", function (e) {
    this.classList.toggle("mark-clicked-btn");
    this.parentElement.parentElement.classList.toggle("checked-task");
    this.parentElement.parentElement.toggleAttribute("disabled");
  });

  deleteMark.addEventListener("click", function (e) {
    this.classList.toggle("mark-clicked-btn");
    this.parentElement.parentElement.remove();

    // when user delete a task delete it from storage
    let windowKeysSorted = Object.keys(window.localStorage);
    windowKeysSorted.forEach((windowKey) => {
      if (window.localStorage[windowKey] === taskDescription.textContent) {
        window.localStorage.removeItem(`${windowKey}`);
      }
    });
  });
}

function addStyleAddedTaskes(
  tasksContainer,
  taskContainer,
  taskDescription,
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

// ************************ LOCAL STORAGE ************************

function retriveLocalStorageData() {
  let taskReg = /^task/i;
  let windowKeyValue;
  let windowKeysSorted = Object.keys(window.localStorage).sort();

  windowKeysSorted.filter((windowKey) => {
    windowKeyValue = this.localStorage[windowKey];
    if (taskReg.test(windowKey)) {
      createTask(windowKeyValue);
    }
  });
  let tasksLength = windowKeysSorted.length;
  taskNumber = tasksLength;
}
