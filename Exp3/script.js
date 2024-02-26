// Dummy data
const tasks = [
    { id: 1, name: 'Task 1', status: 'todo' },
    { id: 2, name: 'Task 2', status: 'inprogress' },
    { id: 3, name: 'Task 3', status: 'done' }
];

// Initialize tasks
const todoList = document.getElementById('todo-list');
const inprogressList = document.getElementById('inprogress-list');
const doneList = document.getElementById('done-list');

tasks.forEach(task => {
    const taskElement = document.createElement('li');
    taskElement.textContent = task.name;
    taskElement.setAttribute('id', task.id);
    taskElement.setAttribute('draggable', 'true');
    taskElement.setAttribute('ondragstart', 'drag(event)');
    taskElement.classList.add('task');
    
    if (task.status === 'todo') {
        todoList.appendChild(taskElement);
    } else if (task.status === 'inprogress') {
        inprogressList.appendChild(taskElement);
    } else if (task.status === 'done') {
        doneList.appendChild(taskElement);
    }
});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    const targetList = ev.target.closest('ul');
    targetList.appendChild(draggedElement);
}
