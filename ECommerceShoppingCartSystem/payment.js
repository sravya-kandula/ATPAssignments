// Importing reduceStock() from product.js
// reduceStock() -> decreases product stock after successful purchase
import { reduceStock } from "./product.js";

// Importing cart-related functions from cart.js
// getCartItems() -> returns all items currently present in the cart
// getCartTotal() -> calculates total cost of cart items
// clearCart() -> clears all cart items after checkout is completed
import { getCartItems, getCartTotal, clearCart } from "./cart.js";

// Importing applyDiscount() from discount.js
// applyDiscount() -> validates coupon and calculates discount + final payable amount
import { applyDiscount } from "./discount.js";

// Function to validate whether the payment method entered by user is supported or not
// Supported payment methods: card, upi, cod
export function validatePaymentMethod(method) {
  return ["card", "upi", "cod"].includes(method);
}

// Function to process payment and generate order details
// Parameters:
// paymentMethod -> selected payment method (card/upi/cod)
// couponCode -> optional coupon code for discount (default is null)
export function processPayment(paymentMethod, couponCode = null) {
  // Checking if payment method is valid
  if (!validatePaymentMethod(paymentMethod)) {
    return { status: "failed", message: "Invalid payment method" };
  }

  // Fetching all cart items
  const items = getCartItems();

  // Calculating subtotal (total amount before discount)
  const subtotal = getCartTotal();

  // Applying discount if coupon code is provided
  // If no coupon is provided, discount will be 0 and finalTotal will be subtotal
  const discountResult = couponCode
    ? applyDiscount(subtotal, couponCode, items)
    : { discount: 0, finalTotal: subtotal };

  // Reducing stock for each purchased item after successful checkout
  items.forEach((item) => {
    reduceStock(item.id, item.quantity);
  });

  // Clearing the cart after order is placed successfully
  clearCart();

  // Returning complete order details as response object
  return {
    orderId: generateOrderId(), // generating a unique order id
    items, // purchased items list
    subtotal, // total before discount
    discount: discountResult.discount || 0, // discount applied (if any)
    total: discountResult.finalTotal, // final payable amount after discount
    paymentMethod, // chosen payment method
    status: "success", // payment success status
    message: "Order placed successfully", // confirmation message
  };
}

// Function to generate a unique order ID
// It uses current timestamp so every order id will be unique
function generateOrderId() {
  return "ORD" + Date.now();
}
