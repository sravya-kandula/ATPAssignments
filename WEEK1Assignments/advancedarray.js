// ASSIGNMENT 1 – Shopping Cart Summary
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true },
];

// 1. filter inStock
let inStockItems = cart.filter((item) => item.inStock);
console.log(inStockItems);

// 2. map {name, totalPrice}
let priceList = cart.map((item) => ({
  name: item.name,
  totalPrice: item.price * item.quantity,
}));
console.log(priceList);

// 3. reduce grand total
let grandTotal = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0,
);
console.log("Grand Total:", grandTotal);

// 4. find Mouse
let mouse = cart.find((item) => item.name === "Mouse");
console.log(mouse);

// 5. findIndex Keyboard
let keyboardIndex = cart.findIndex((item) => item.name === "Keyboard");
console.log(keyboardIndex);

///////////////////ASSIGNMENT 2 – Student Performance Dashboard
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 },
];

// 1. filter passed
let passed = students.filter((s) => s.marks >= 40);
console.log(passed);

// 2. map add grade
let graded = students.map((s) => ({
  ...s,
  grade: s.marks >= 90 ? "A" : s.marks >= 75 ? "B" : s.marks >= 60 ? "C" : "D",
}));
console.log(graded);

// 3. reduce average
let avgMarks = students.reduce((sum, s) => sum + s.marks, 0) / students.length;
console.log("Average:", avgMarks);

// 4. find 92
let topper = students.find((s) => s.marks === 92);
console.log(topper);

// 5. findIndex Kiran
let kiranIndex = students.findIndex((s) => s.name === "Kiran");
console.log(kiranIndex);

//////////////ASSIGNMENT 3 – Employee Payroll Processor
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" },
];

// 1. filter IT
let itEmployees = employees.filter((e) => e.department === "IT");
console.log(itEmployees);

// 2. map add bonus
let salaryWithBonus = employees.map((e) => ({
  ...e,
  netSalary: e.salary + e.salary * 0.1,
}));
console.log(salaryWithBonus);

// 3. reduce total payout
let totalPayout = employees.reduce((sum, e) => sum + e.salary, 0);
console.log("Total:", totalPayout);

// 4. find salary 30000
let pooja = employees.find((e) => e.salary === 30000);
console.log(pooja);

// 5. findIndex Neha
let nehaIndex = employees.findIndex((e) => e.name === "Neha");
console.log(nehaIndex);

////////////////////ASSIGNMENT 4 – Movie Streaming Platform
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 },
];

// 1. filter Sci-Fi
let sciFi = movies.filter((m) => m.genre === "Sci-Fi");
console.log(sciFi);

// 2. map title + rating
let movieLabels = movies.map((m) => `${m.title} (${m.rating})`);
console.log(movieLabels);

// 3. reduce average rating
let avgRating = movies.reduce((sum, m) => sum + m.rating, 0) / movies.length;
console.log("Average:", avgRating);

// 4. find Joker
let joker = movies.find((m) => m.title === "Joker");
console.log(joker);

// 5. findIndex Avengers
let avengersIndex = movies.findIndex((m) => m.title === "Avengers");
console.log(avengersIndex);

///////////////ASSIGNMENT 5 – Bank Transaction Analyzer
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 },
];

// 1. filter credits
let credits = transactions.filter((t) => t.type === "credit");
console.log(credits);

// 2. map amounts
let amounts = transactions.map((t) => t.amount);
console.log(amounts);

// 3. reduce balance
let balance = transactions.reduce(
  (acc, t) => (t.type === "credit" ? acc + t.amount : acc - t.amount),
  0,
);
console.log("Balance:", balance);

// 4. find first debit
let firstDebit = transactions.find((t) => t.type === "debit");
console.log(firstDebit);

// 5. findIndex amount 10000
let index10000 = transactions.findIndex((t) => t.amount === 10000);
console.log(index10000);
