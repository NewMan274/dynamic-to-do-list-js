// Wait for the HTML document to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load saved tasks from Local Storage on page load
  loadTasks();

  //Add click event to the 'Add Task' button
  addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    addTask(taskText);
    taskInput.value = " ";
  });

  //Add keyboard event to support 'Enter' key
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const taskText = taskInput.value.trim();
      addTask(taskText);
      taskInput.value = " ";
    }
  });

  function addTask(taskText, save = true) {
    // Alert if the input is empty
    if (taskText === "") {
      alert("Please input a task.");
      return;
    }

    // Create a new <li> element and set its text
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create a 'Remove' button and set its class
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    // Add event to remove the task when 'Remove' button is clicked
    removeBtn.onclick = function () {
      taskList.removeChild(li);
      removeTaskFromStorage(taskText);
    };

    // Add event to remove the task when 'Remove' button is clicked
    li.appendChild(removeBtn);

    // Append the remove button to the <li>
    taskList.appendChild(li);

    // Save task to local storage if needed
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

    // Clear the input field
    taskList.value = " ";
  }

  // Function to load tasks from local storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach(taskText => addTask(taskText, false));
  }

  // Function to remove task from local storage
  function removeTaskFromStorage() {
    let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }
})