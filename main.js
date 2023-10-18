// Function to update the item count
function updateItemCount() {
  var itemCount = document.querySelectorAll('#todoList li').length;
  var itemCountElement = document.getElementById('itemCount');
  itemCountElement.textContent = 'Number of Items: ' + itemCount;
}


function getToDo(){
  // Get the input element by its ID
  var inputElement = document.getElementById("text");

  // Get the value of the input field
  var inputValue = inputElement.value;

  // The trim() method removes whitespace from both sides of a string.
  if(inputValue.trim() !== ""){
      // Create a new list item (li) element
      var listItem = document.createElement("li");

      // Create a checkbox input element
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      // Set the text content of the list item to the to-do text
      listItem.textContent = inputValue;

      // Append the checkbox and list item to the li element
      listItem.appendChild(checkbox);

      // Create a delete button
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      
      // Add event listener to delete the corresponding li element
      deleteButton.addEventListener("click", function(){
          listItem.remove();
          updateItemCount();
      });

      // Append the delete button to the li element
      listItem.appendChild(deleteButton);

      // Get the ul element where to-dos will be added
      var todoList = document.getElementById("todoList");

      // Append the li element to the ul element
      todoList.appendChild(listItem);

      // Clear the input box after clicking on add btn
      inputElement.value = "";
      updateItemCount();
  }
}
