// Cache the task list element for later use:
const todoList = document.getElementById('todo-list');

// Cache the input field and button for adding new items
const newItemInput = document.getElementById('new-item-text');
const addItemButton = document.getElementById('add-item');

// Function to add a new item to the to-do list
function addNewItem() {
    // Get the text from the input field
    const itemText = newItemInput.value.trim();

    // Only add the item if the input is not empty
    if (itemText) {
        // Create a new LI element and set its text content
        const newItem = document.createElement('li');
        newItem.textContent = itemText;

        // Append the new item to the cached todo list
        todoList.appendChild(newItem);

        // Clear the input field for the next item
        newItemInput.value = '';
    }
}

// Cache the list element using querySelectorAll
document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('#new-item-text');
    const addButton = document.querySelector('#add-item');
    const itemList = document.querySelector('#todo-list');

    function addTodoItem(text) {
        if (text.trim() === '') return;

        const newItem = document.createElement('li');
        newItem.textContent = text;
        newItem.classList.add('todo-item');
        itemList.appendChild(newItem);
        // Ensure each new item gets an event listener
        newItem.addEventListener('click', toggleCompleted);

        // Clear input field
        inputField.value = '';
    }

    addButton.addEventListener('click', () => {
        const text = inputField.value;
        addTodoItem(text);
    });

    // Toggle the 'completed' class on click, and also for the next sibling
    function toggleCompleted(event) {
        const currentItem = event.target;
        currentItem.classList.toggle('completed');

        // If there's a next sibling, toggle its completed state as well
        if (currentItem.nextElementSibling) {
            currentItem.nextElementSibling.classList.toggle('completed');
        }
    }

    // Add event listeners to existing items
    document.querySelectorAll('.todo-item').forEach(item => {
        item.addEventListener('click', toggleCompleted);

        // Iterate a collection of elt to accomplish some task
        const showAllButton = document.querySelector('#show-all');
        const showCompletedButton = document.querySelector('#show-completed');
        const showIncompleteButton = document.querySelector('#show-incomplete');
    
        function filterTasks(filter) {
            const items = document.querySelectorAll('.todo-item');
    
            items.forEach(item => {
                switch (filter) {
                    case 'all':
                        item.style.display = '';
                        break;
                    case 'completed':
                        if (item.classList.contains('completed')) {
                            item.style.display = '';
                        } else {
                            item.style.display = 'none';
                        }
                        break;
                    case 'incomplete':
                        if (!item.classList.contains('completed')) {
                            item.style.display = '';
                        } else {
                            item.style.display = 'none';
                        }
                        break;
                }
            });
        }
    
        // Event listeners for the filter buttons
        showAllButton.addEventListener('click', () => filterTasks('all'));
        showCompletedButton.addEventListener('click', () => filterTasks('completed'));
        showIncompleteButton.addEventListener('click', () => filterTasks('incomplete'));
    });
});

//Create element using createElement.
document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('#new-item-text');
    const addButton = document.querySelector('#add-item');
    const itemList = document.querySelector('#todo-list');

    function addTodoItem(text) {
        if (text.trim() === '') return;

        // Create the list item
        const newItem = document.createElement('li');
        newItem.textContent = text;
        newItem.classList.add('todo-item');

        // Create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        // Append the delete button to the list item
        newItem.appendChild(deleteButton);

        // Add the list item to the todo list
        itemList.appendChild(newItem);

        // Add event listeners
        newItem.addEventListener('click', toggleCompleted);
        deleteButton.addEventListener('click', function(e) {
            // Prevent the list item's click event from firing
            e.stopPropagation();
            // Remove the list item from the list
            newItem.remove();
        });

        // Clear input field
        inputField.value = '';
    }

    addButton.addEventListener('click', () => {
        const text = inputField.value;
        addTodoItem(text);
    });

    // Existing toggleCompleted function...
});

//used appendChild an
document.addEventListener('DOMContentLoaded', () => {
    const addTaskTopBtn = document.getElementById('add-task-top-btn');
    const addTaskBottomBtn = document.getElementById('add-task-bottom-btn');
    const tasksList = document.getElementById('tasks-list');
    const newTaskInput = document.getElementById('new-task-input');

    // Function to create and return a new task item
    function createTaskItem(taskText) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        taskItem.classList.add('todo-item');

        // Optionally add more functionality here (e.g., delete button)
        
        return taskItem;
    }

    // Event listener for adding a task at the top
    addTaskTopBtn.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (!taskText) {
            alert('Please enter a task!');
            return;
        }

        const newTaskItem = createTaskItem(taskText);
        // Prepend the new task item to the list
        tasksList.prepend(newTaskItem);
        newTaskInput.value = ''; // Clear the input field
    });

    // Event listener for adding a task at the bottom
    addTaskBottomBtn.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (!taskText) {
            alert('Please enter a task!');
            return;
        }

        const newTaskItem = createTaskItem(taskText);
        // Append the new task item to the list
        tasksList.appendChild(newTaskItem);
        newTaskInput.value = ''; // Clear the input field
    });
});

//template with colneNode
function addTaskUsingTemplate(taskText) {
    const tasksList = document.getElementById('tasks-list');
    const template = document.getElementById('task-template').content;
    const newTaskItem = template.cloneNode(true);

    newTaskItem.querySelector('.task-text').textContent = taskText;

    // Assuming delete functionality is desired, here's how you could set it up:
    const deleteBtn = newTaskItem.querySelector('.delete-task-btn');
    deleteBtn.addEventListener('click', function() {
        this.parentNode.remove();
    });

    tasksList.appendChild(newTaskItem);
}

//Modify html using innerHTML and innerText.
document.addEventListener('DOMContentLoaded', () => {
    const addPredefinedTasksBtn = document.getElementById('add-predefined-tasks-btn');
    const tasksList = document.getElementById('tasks-list');
    const taskCounter = document.getElementById('task-counter');

    // Function to update the task counter
    function updateTaskCounter() {
        const taskCount = tasksList.querySelectorAll('.todo-item').length;
        taskCounter.innerText = `Tasks: ${taskCount}`; // Using innerText to modify content
    }

    addPredefinedTasksBtn.addEventListener('click', () => {
        const predefinedTasks = ['Learn JavaScript', 'Read about DocumentFragment', 'Build a to-do list app'];
        const fragment = document.createDocumentFragment();

        predefinedTasks.forEach(taskText => {
            const newTaskItem = document.createElement('li');
            newTaskItem.textContent = taskText;
            newTaskItem.classList.add('todo-item');
            fragment.appendChild(newTaskItem);
        });

        tasksList.appendChild(fragment);

        updateTaskCounter(); // Update the task counter whenever new tasks are added
    });

    // add individual tasks and update the counter accordingly
});
