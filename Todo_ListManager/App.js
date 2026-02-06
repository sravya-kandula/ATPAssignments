// Importing required task management functions from Task.js
// addTask() -> adds a new task with title, priority, and due date
// getAllTasks() -> returns all tasks available in the task list
// completeTask() -> marks a task as completed using task ID
import { addTask, getAllTasks, completeTask } from "./Task.js";

// Displaying heading of the TODO application
console.log("=== TODO APP ===");

// Adding tasks into the task list
// addTask(taskTitle, priorityLevel, dueDate)
console.log(addTask("Learn JS", "high", "2026-02-10")); // Adding a high priority task
console.log(addTask("Build Project", "medium", "2026-03-01")); // Adding a medium priority task

// Displaying all tasks after adding them
console.log("\nAll Tasks:");
console.log(getAllTasks());

// Completing a task by providing its ID
console.log("\nCompleting Task 1");
console.log(completeTask(1)); // Marks task with ID 1 as completed

// Displaying all tasks after updating completion status
console.log("\nUpdated Tasks:");
console.log(getAllTasks());
