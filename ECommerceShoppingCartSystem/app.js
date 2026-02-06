// Importing product-related functions from product.js
// getAllProducts() -> returns the complete list of products available in the store
// searchProducts() -> searches products based on a keyword
import { getAllProducts, searchProducts } from "./product.js";

// Importing cart-related functions from cart.js
// addToCart() -> adds a product into the cart with given quantity
// getCartItems() -> returns all products currently in the cart
// getCartTotal() -> calculates total cost of cart items
// updateQuantity() -> updates the quantity of a product in the cart
// removeFromCart() -> removes a product completely from the cart
import {
  addToCart,
  getCartItems,
  getCartTotal,
  updateQuantity,
  removeFromCart,
} from "./cart.js";

// Importing payment-related function from payment.js
// processPayment() -> processes the payment method and applies discount if coupon is valid
import { processPayment } from "./payment.js";

// Printing the heading of the E-Commerce Store system
console.log("=== E-Commerce Store ===");

// Displaying all available products in the store
console.log("\nAll Products:");
console.log(getAllProducts());

// Searching for products that contain the keyword "phone"
console.log("\nSearch 'phone':");
console.log(searchProducts("phone"));

// Adding products into the cart
// addToCart(productId, quantity)
console.log("\nAdding to cart:");
console.log(addToCart(1, 2)); // Adding product with ID 1, quantity 2
console.log(addToCart(3, 3)); // Adding product with ID 3, quantity 3
console.log(addToCart(1, 1)); // Adding product with ID 1 again (quantity increases)

// Displaying all items present in the cart
console.log("\nCart:");
console.log(getCartItems());

// Displaying the total price of all items in the cart
console.log("Total:", getCartTotal());

// Updating the quantity of product with ID 1 to 2
console.log(updateQuantity(1, 2));

// Removing the product with ID 3 from the cart completely
console.log(removeFromCart(3));

// Displaying updated cart details after modifications
console.log("\nUpdated Cart:");
console.log(getCartItems());

// Displaying updated total after cart changes
console.log("Total:", getCartTotal());

// Performing checkout process
// processPayment(paymentMethod, couponCode)
console.log("\nCheckout:");
console.log(processPayment("upi", "WELCOME10")); // Payment through UPI with coupon applied
