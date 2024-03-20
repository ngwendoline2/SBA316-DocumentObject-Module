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
    const itemList = document.querySelector('#todo-list');
    let items = document.querySelectorAll('.todo-item'); // Cache existing to-do items

    const inputField = document.querySelector('#new-item-text');
    const addButton = document.querySelector('#add-item');

    // Function to add a new to-do item
    function addTodoItem(text) {
        if (text.trim() === '') return;

        const newItem = document.createElement('li');
        newItem.textContent = text;
        newItem.classList.add('todo-item');
        itemList.appendChild(newNewItem);

        // Update the cached list of items
        items = document.querySelectorAll('.todo-item');
    }

    addButton.addEventListener('click', () => {
        const text = inputField.value;
        addTodoItem(text);
        inputField.value = ''; // Clear input field
    });

    //  Log text content of cached item
    items.forEach(item => {
        console.log(item.textContent);
    });
});