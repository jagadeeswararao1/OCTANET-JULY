document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('first');
    const addTaskButton = document.getElementById('abb');
    const taskList = document.getElementById('list');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-button')) {
            deleteTask(e.target.parentElement.parentElement);
        } else if (e.target.classList.contains('edit-button')) {
            editTask(e.target.parentElement.parentElement);
        } else if (e.target.tagName === 'LI') {
            toggleComplete(e.target);
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.className = 'task';
        li.innerHTML = `
            ${taskText}
            <div>
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    }

    function deleteTask(task) {
        if (confirm('Are you sure you want to remove this task?')) {
            taskList.removeChild(task);
        }
    }

    function editTask(task) {
        const newTaskText = prompt('Edit task:', task.firstChild.textContent.trim());
        if (newTaskText !== null && newTaskText.trim() !== '') {
            task.firstChild.textContent = newTaskText.trim();
        }
    }

    function toggleComplete(task) {
        task.classList.toggle('completed');
    }
});
