//Hands-On 1: Shallow Copy (Controlled Mutation Use Case)

// Original object
const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en",
  },
};

// 1. Create a shallow copy using spread operator
const userCopy = { ...user };

// 2.i Change name in the copied object
userCopy.name = "Rahul";

// 2.ii Change nested property (preferences.theme)
userCopy.preferences.theme = "light";

// 2.iii Log both objects
console.log("Original User:", user);
console.log("Copied User:", userCopy);
