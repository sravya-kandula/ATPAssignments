//Assignment 3: Age Calculator (Exact Years)
let dob = "2000-05-15";
let birthDate = new Date(dob);
let today = new Date();

// Calculate age
let age = today.getFullYear() - birthDate.getFullYear();

let monthDifference = today.getMonth() - birthDate.getMonth();
let dayDifference = today.getDate() - birthDate.getDate();

// Adjust age if birthday not yet occurred this year
if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
  age--;
}

console.log("Exact Age:", age, "years");
