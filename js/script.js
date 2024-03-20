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
