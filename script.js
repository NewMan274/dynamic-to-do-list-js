// Wait for the HTML document to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask() {
    // Get the trimmed value from the input field
    const taskText = taskInput.value.trim();

    // Alert if the input is empty
    if (taskText === "") {
      alert("Please input a task.");
      return;
    } else {
      // Create a new <li> element and set its text
      const li = document.createElement("li");
      li.textContent = taskText;

      // Create a 'Remove' button and set its class
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.className = "remove-btn";

      // Add event to remove the task when 'Remove' button is clicked
      removeBtn.onclick = function () {
        taskList.removeChild(li);
      };

      // Add event to remove the task when 'Remove' button is clicked
      li.appendChild(removeBtn);

      // Append the remove button to the <li>
      taskList.appendChild(li);

      // Clear the input field
      taskList.value = " ";
    }
  }
  
  // Step 3: Add click event to the 'Add Task' button
  addButton.addEventListener("click", addTask);

  // Step 4: Add keyboard event to support 'Enter' key
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  })
})