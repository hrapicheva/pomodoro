const numberInput = document.getElementById("numberInput");
const decreaseButton = document.querySelector(".decrease");
const increaseButton = document.querySelector(".increase");

decreaseButton.addEventListener("click", () => {
  numberInput.stepDown();
});

increaseButton.addEventListener("click", () => {
  numberInput.stepUp();
});

$(document).ready(function() {
  // Initially hide the new_task element
  $('.new_task').hide();

  // When the "Add Task" button is clicked
  $('.add_task').click(function() {
      // Hide the add_task element
      $('.add_task').hide();
      // Show the new_task element
      $('.new_task').show();
  });

  // When the "Cansel" button is clicked
  $('.cansel').click(function() {
      // Hide the new_task element
      $('.new_task').hide();
      // Show the add_task element
      $('.add_task').show();
  });
});