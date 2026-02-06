//deepcopy
// Original object
const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085,
    },
  },
  items: [{ product: "Laptop", price: 70000 }],
};

// 1. Create a deep copy using JSON methods
const orderCopy = JSON.parse(JSON.stringify(order));

// 2.i Modify nested property in copied object
orderCopy.customer.address.city = "Bangalore";

// 2.ii Modify array object property
orderCopy.items[0].price = 65000;

// 2.iii Log both objects
console.log("Original Order:", order);
console.log("Copied Order:", orderCopy);
