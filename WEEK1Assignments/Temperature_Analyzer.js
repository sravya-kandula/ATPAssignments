//Assignment 1: Daily Temperature Analyzer
const temperatures = [32, 35, 28, 40, 38, 30, 42];

// 1. filter temperatures above 35
let above35 = temperatures.filter((temp) => temp > 35);
console.log("Above 35:", above35);

// 2. map Celsius → Fahrenheit
let fahrenheit = temperatures.map((c) => (c * 9) / 5 + 32);
console.log("Fahrenheit:", fahrenheit);

// 3. reduce average temperature
let avg = temperatures.reduce((sum, t) => sum + t, 0) / temperatures.length;
console.log("Average:", avg);

// 4. find first temperature above 40
let firstAbove40 = temperatures.find((t) => t > 40);
console.log("First above 40:", firstAbove40);

// 5. findIndex of temperature 28
let index28 = temperatures.findIndex((t) => t === 28);
console.log("Index of 28:", index28);

//Assignment 2: Online Course Name Processor
const courses = ["javascript", "react", "node", "mongodb", "express"];

// 1. filter length > 5
let longCourses = courses.filter((c) => c.length > 5);
console.log("Length > 5:", longCourses);

// 2. map to uppercase
let upper = courses.map((c) => c.toUpperCase());
console.log("Uppercase:", upper);

// 3. reduce to single string
let courseString = upper.reduce((acc, c) => acc + " | " + c);
console.log(courseString);

// 4. find "react"
let foundReact = courses.find((c) => c === "react");
console.log("Found:", foundReact);

// 5. findIndex of "node"
let indexNode = courses.findIndex((c) => c === "node");
console.log("Index of node:", indexNode);

//Assignment 3: Student Marks List
const marks = [78, 92, 35, 88, 40, 67];

// 1. filter pass marks
let pass = marks.filter((m) => m >= 40);
console.log("Pass:", pass);

// 2. map add 5 grace
let grace = marks.map((m) => m + 5);
console.log("Grace:", grace);

// 3. reduce highest mark
let highest = marks.reduce((max, m) => (m > max ? m : max));
console.log("Highest:", highest);

// 4. find first below 40
let firstFail = marks.find((m) => m < 40);
console.log("First fail:", firstFail);

// 5. findIndex of 92
let index92 = marks.findIndex((m) => m === 92);
console.log("Index of 92:", index92);
