const numberInput = document.getElementById("numberInput");
const decreaseButton = document.querySelector(".decrease");
const increaseButton = document.querySelector(".increase");

decreaseButton.addEventListener("click", () => {
  numberInput.stepDown();
});

increaseButton.addEventListener("click", () => {
  numberInput.stepUp();
});
