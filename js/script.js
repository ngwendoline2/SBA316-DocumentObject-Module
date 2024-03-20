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