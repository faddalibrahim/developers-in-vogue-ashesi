const textbox = document.getElementById("textbox");
const taskParent = document.getElementById("task-parent");

let newTask = "";

textbox.addEventListener("keyup", function (event) {
  newTask = textbox.value;
  if (event.which === 13) {
    const li = document.createElement("li");
    li.textContent = newTask;
    console.log(li);
    taskParent.appendChild(li);

    textbox.value = "";
  }
});
