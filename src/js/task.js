const taskBurgButton = document.querySelector(".task_burg");
const taskBarMenu = document.querySelector(".task_bar");

taskBurgButton.addEventListener("click", () => {
    if (taskBarMenu.style.display === "block") {
        taskBarMenu.style.display = "none";
    } else {
        taskBarMenu.style.display = "block";
    }
});

document.addEventListener("click", (event) => {
    if (!taskBurgButton.contains(event.target) && !taskBarMenu.contains(event.target)) {
        taskBarMenu.style.display = "none";
    }
});
