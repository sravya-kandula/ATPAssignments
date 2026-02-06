////////Assignment 1: User Profile Manager
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true,
};

// 1. Read & print name and email
console.log("Name:", user.name);
console.log("Email:", user.email);

// 2. Add lastLogin
user.lastLogin = "2026-01-01";

// 3. Update role
user.role = "admin";

// 4. Delete isActive
delete user.isActive;

// 5. List all keys
console.log("Remaining Fields:", Object.keys(user));

//////////////Assignment 2: Exam Result Summary
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55,
};

// 1. Total marks
let total = Object.values(marks).reduce((sum, m) => sum + m, 0);
console.log("Total:", total);

// 2. Average marks
let avg = total / Object.keys(marks).length;
console.log("Average:", avg);

// 3. Highest scoring subject
let highestSubject = Object.keys(marks).reduce((a, b) =>
  marks[a] > marks[b] ? a : b,
);
console.log("Top Subject:", highestSubject);

// 4. Add new subject
marks.computer = 90;
console.log(marks);

/////////////Assignment 3: Application Settings Controller
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en",
};

// 1. Toggle theme
settings.theme = settings.theme === "light" ? "dark" : "light";

// 2. Turn autoSave true
settings.autoSave = true;

// 3. Remove notifications
delete settings.notifications;

// 4. Freeze object
Object.freeze(settings);

console.log(settings);
