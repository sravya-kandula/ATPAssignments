// Initial data
let totalAmount = 0;

// 1. Add ₹500
totalAmount += 500;

// 2. Add ₹1200
totalAmount += 1200;

// 3. Apply ₹200 discount
totalAmount -= 200;

// 4. Add 18% GST
totalAmount += totalAmount * 0.18;

// 5. Print final bill amount
console.log("Final Bill Amount: ₹" + Math.round(totalAmount));
