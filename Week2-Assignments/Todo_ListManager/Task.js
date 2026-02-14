// Importing validation functions from Validator.js
// validateTitle() -> checks if title is valid or not
// validatePriority() -> checks if priority is valid (high/medium/low)
// validateDueDate() -> checks if due date is valid format and future date
import {
  validateTitle,
  validatePriority,
  validateDueDate,
} from "./Validator.js";

// Array to store all tasks in the TODO application
let tasks = [];

// Counter to generate unique task IDs
let taskIdCounter = 1;

// 1. Function to add a new task into the task list
// Parameters:
// title -> task name/title
// priority -> task priority level (high/medium/low)
// dueDate -> task deadline date
export function addTask(title, priority, dueDate) {
  // Validating the task title
  const titleCheck = validateTitle(title);
  if (!titleCheck.valid) return titleCheck.message;

  // Validating the task priority
  const priorityCheck = validatePriority(priority);
  if (!priorityCheck.valid) return priorityCheck.message;

  // Validating the due date of the task
  const dateCheck = validateDueDate(dueDate);
  if (!dateCheck.valid) return dateCheck.message;

  // Creating a new task object with unique ID and default completed status as false
  const newTask = {
    id: taskIdCounter++, // auto-incrementing task ID
    title, // storing task title
    priority, // storing task priority
    dueDate, // storing task due date
    completed: false, // task is initially not completed
  };

  // Adding the newly created task into tasks array
  tasks.push(newTask);

  // Returning success message after adding task
  return "Task added successfully";
}

// 2. Function to return all tasks present in the task list
// Returns tasks array
export function getAllTasks() {
  return tasks;
}

// 3. Function to mark a task as completed
// Parameter: taskId -> id of the task that needs to be completed
export function completeTask(taskId) {
  // Searching for the task using its ID
  const task = tasks.find((t) => t.id === taskId);

  // If task is not found, return error message
  if (!task) return "Task not found";

  // Marking task as completed
  task.completed = true;

  // Returning confirmation message
  return "Task marked as completed";
}
