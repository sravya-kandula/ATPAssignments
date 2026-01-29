// 1. Create a Date object for current date & time
let now = new Date();

// 2. Extract details
let year = now.getFullYear();

// Human-readable month (without declaring month names)
let month = now.toLocaleString("default", { month: "long" });

let date = now.getDate();

let day = now.toLocaleString("default", { weekday: "long" });

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

// Display extracted values
console.log("Year:", year);
console.log("Month:", month);
console.log("Date:", date);
console.log("Day:", day);
console.log("Time:", hours, minutes, seconds);

// 3. Display format: DD-MM-YYYY HH:mm:ss
function padZero(num) {
  return num < 10 ? "0" + num : num;
}

let formattedDate =
  padZero(date) +
  "-" +
  padZero(now.getMonth() + 1) +
  "-" +
  year +
  " " +
  padZero(hours) +
  ":" +
  padZero(minutes) +
  ":" +
  padZero(seconds);

console.log("Formatted Date:", formattedDate);
