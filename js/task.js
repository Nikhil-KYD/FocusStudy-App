// ========================================
// TASK ELEMENTS
// ========================================

const tasksButton = document.getElementById("tasksButton");
const tasksPanel = document.getElementById("tasksPanel");
const closeTasks = document.getElementById("closeTasks");

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");

const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");


// ========================================
// OPEN TASKS
// ========================================

tasksButton.addEventListener("click", function () {

    tasksPanel.style.display = "block";

});


// ========================================
// CLOSE TASKS
// ========================================

closeTasks.addEventListener("click", function () {

    tasksPanel.style.display = "none";

});


// ========================================
// ADD TASK
// ========================================

function addTask() {

    const taskText = taskInput.value.trim();


    // Don't add empty tasks

    if (taskText === "") {
        return;
    }


    // Create task container

    const taskItem = document.createElement("div");

    taskItem.className = "task-item";


    // Create checkbox

    const checkButton = document.createElement("button");

    checkButton.className = "task-check";

    checkButton.type = "button";


    // Create text

    const text = document.createElement("span");

    text.className = "task-text";

    text.textContent = taskText;


    // Create delete button

    const deleteButton = document.createElement("button");

    deleteButton.className = "delete-task";

    deleteButton.type = "button";

    deleteButton.innerHTML =
        '<i data-lucide="trash-2"></i>';


    // Add everything to task

    taskItem.appendChild(checkButton);

    taskItem.appendChild(text);

    taskItem.appendChild(deleteButton);


    // Add task to list

    taskList.appendChild(taskItem);


    // Clear input

    taskInput.value = "";


    // Checkbox

    checkButton.addEventListener("click", function () {

        taskItem.classList.toggle("completed");

        updateTaskCount();

    });


    // Delete

    deleteButton.addEventListener("click", function () {

        taskItem.remove();

        updateTaskCount();

    });


    // Update icons

    lucide.createIcons();


    // Update count

    updateTaskCount();

}


// ========================================
// ADD BUTTON
// ========================================

addTaskButton.addEventListener("click", function () {

    addTask();

});


// ========================================
// ENTER KEY
// ========================================

taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        addTask();

    }

});


// ========================================
// TASK COUNT
// ========================================

function updateTaskCount() {

    const tasks =
        document.querySelectorAll(".task-item");

    const remaining =
        document.querySelectorAll(
            ".task-item:not(.completed)"
        );


    if (tasks.length === 0) {

        taskCount.textContent = "0 tasks";

    } else if (remaining.length === 1) {

        taskCount.textContent = "1 task left";

    } else {

        taskCount.textContent =
            remaining.length + " tasks left";

    }

}