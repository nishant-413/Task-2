document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div>
                <button class="edit-btn" onclick="editTask(this)">Edit</button>
                <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
                <input type="checkbox" onclick="toggleCompletion(this)">
            </div>
        `;

        taskList.appendChild(li);
        taskInput.value = '';
    }

    function editTask(button) {
        const li = button.closest('li');
        const taskTextSpan = li.querySelector('.task-text');
        const newText = prompt('Edit task:', taskTextSpan.textContent);
        if (newText) {
            taskTextSpan.textContent = newText;
        }
    }

    function deleteTask(button) {
        const li = button.closest('li');
        taskList.removeChild(li);
    }

    function toggleCompletion(checkbox) {
        const li = checkbox.closest('li');
        const taskTextSpan = li.querySelector('.task-text');
        if (checkbox.checked) {
            taskTextSpan.classList.add('task-completed');
        } else {
            taskTextSpan.classList.remove('task-completed');
        }
    }

    window.addTask = addTask;
    window.editTask = editTask;
    window.deleteTask = deleteTask;
    window.toggleCompletion = toggleCompletion;
});
