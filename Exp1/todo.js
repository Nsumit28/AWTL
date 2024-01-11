function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      const tasksList = document.getElementById("tasks");
  
      const li = document.createElement("li");
      li.className = "task";
      li.innerHTML = `
        <span>${taskText}</span>
        <div>
          <button class="complete" onclick="completeTask(this)">Complete</button>
          <button class="delete" onclick="deleteTask(this)">Delete</button>
        </div>
      `;
  
      tasksList.appendChild(li);
      taskInput.value = "";
    }
  }
  
  function completeTask(button) {
    const task = button.parentNode.parentNode;
    task.classList.toggle("completed");
    button.innerText = task.classList.contains("completed") ? "Undo" : "Complete";
  }
  
  function deleteTask(button) {
    const task = button.parentNode.parentNode;
    task.style.animation = "fadeOut 0.5s ease";
    
    setTimeout(() => {
      task.remove();
    }, 500);
  }
  
