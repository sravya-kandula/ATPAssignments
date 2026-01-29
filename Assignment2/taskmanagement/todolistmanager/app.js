import { addTask, getAllTasks, completeTask } from "./task.js";

console.log("=== TODO APP ===");

console.log(addTask("Learn JS", "high", "2026-02-10"));
console.log(addTask("Build Project", "medium", "2026-03-01"));

console.log("\nAll Tasks:");
console.log(getAllTasks());

console.log("\nCompleting Task 1");
console.log(completeTask(1));

console.log("\nUpdated Tasks:");
console.log(getAllTasks());
