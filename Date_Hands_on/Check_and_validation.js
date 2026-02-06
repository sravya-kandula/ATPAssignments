//Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
let enrollmentDeadline = new Date("2026-01-20");
let today = new Date();

if (today < enrollmentDeadline) {
  console.log("Enrollment Open");
} else {
  console.log("Enrollment Closed");
}
//validation
let input = "2026-02-30";

// Convert input to Date
let dateObj = new Date(input);

// Extract parts
let [year, month, day] = input.split("-").map(Number);

// Validation check
if (
  dateObj.getFullYear() === year &&
  dateObj.getMonth() === month - 1 &&
  dateObj.getDate() === day
) {
  console.log("Valid Date");
} else {
  console.log("Invalid Date");
}
