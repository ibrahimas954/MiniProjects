const checkBtn = document.querySelector(".check-btn");
const trashBtn = document.querySelector(".trash-btn");
const addTodoBtn = document.querySelector(".add");
const toDoList = document.querySelector(".todo-list");

let select = document.querySelector("select");
addTodoBtn.addEventListener("click", addTodo);
select.addEventListener("change", () => {
  let allLi = document.querySelectorAll("li");
  switch (select.value) {
    case "All":
      for (let index = 0; index < allLi.length; index++) {
        console.log(allLi[index]);
        if (allLi[index].classList.contains("hide")) {
          allLi[index].classList.remove("hide");
        }
      }
      break;

    case "Uncompleted":
      for (let index = 0; index < allLi.length; index++) {
        console.log(allLi[index]);
        if (
          allLi[index].classList.contains("checked") &&
          !allLi[index].classList.contains("hide")
        ) {
          allLi[index].classList.add("hide");
        }
        if (!allLi[index].classList.contains("checked")) {
          allLi[index].classList.remove("hide");
        }
      }
      break;

    case "Completed":
      for (let index = 0; index < allLi.length; index++) {
        console.log(allLi[index]);
        if (!allLi[index].classList.contains("checked")) {
          allLi[index].classList.add("hide");
        }
        if (
          allLi[index].classList.contains("checked") &&
          allLi[index].classList.contains("hide")
        ) {
          allLi[index].classList.remove("hide");
        }
      }
      break;

    default:
      console.log(select.value);
      break;
  }
});
window.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    addTodo();
  }
});

function removeToDo() {
  let todoLi = this.parentNode;
  todoLi.classList.add("drop");
  todoLi.addEventListener("transitionend", () => {
    todoLi.remove();
  });
}

function completeToDo() {
  let task = this.parentNode;

  if (task.classList.contains("checked")) {
    task.classList.remove("checked");
    task.querySelector("input").classList.remove("checked");
  } else {
    task.classList.add("checked");
    task.querySelector("input").classList.add("checked");
  }
}

function addTodo() {
  let todoInput = document.querySelector(".input-text");
  let taskLi = document.createElement("li");
  let taskText = document.createElement("input");
  taskText.setAttribute("type", "text");
  taskText.value = todoInput.value;
  todoInput.value = "";
  //<i class="fas fa-check"></i>
  let taskCheck = document.createElement("button");
  taskCheck.onclick = completeToDo;
  taskCheck.classList.add("check");
  taskCheck.innerHTML = "V";
  let taskTrash = document.createElement("button");
  taskTrash.onclick = removeToDo;
  taskTrash.classList.add("trash");
  taskTrash.innerHTML = "X";
  taskLi.appendChild(taskText);
  taskLi.appendChild(taskCheck);
  taskLi.appendChild(taskTrash);
  document.querySelector("ul").appendChild(taskLi);
}
