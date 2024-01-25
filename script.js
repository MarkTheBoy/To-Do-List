document.addEventListener('DOMContentLoaded', function () {
    var newTaskInput = document.querySelector('#newtask input');
    var tasksContainer = document.querySelector('.container');

    newTaskInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            var taskElement = document.createElement('div');
            taskElement.classList.add('task');

            // Create a span for the task text
            var taskText = document.createElement('span');
            taskText.innerText = newTaskInput.value;
            taskElement.appendChild(taskText);

            // Create a delete button with a recycle bin icon
            var deleteButton = document.createElement('button');
            deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
            deleteButton.addEventListener('click', function () {
                // Remove the task when the delete button is clicked
                tasksContainer.removeChild(taskElement);
            });
            taskElement.appendChild(deleteButton);

            tasksContainer.appendChild(taskElement);

            newTaskInput.value = '';
        }
    });
});
