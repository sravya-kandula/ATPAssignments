// Importing required functions from product.js
// getProductById() -> fetches product details using productId
// checkStock() -> checks whether requested quantity is available in stock
import { getProductById, checkStock } from "./product.js";

// Array to store all cart items
// Each cart item will be stored as an object: { productId, quantity }
let cartItems = [];

// Function to add a product into the cart
// Parameters: productId -> id of the product, quantity -> number of items to add
export function addToCart(productId, quantity) {
  // Fetching product details using productId
  const product = getProductById(productId);

  // If product does not exist, return an error message
  if (!product) return "Product not found";

  // Checking whether the required quantity is available in stock
  if (!checkStock(productId, quantity)) {
    return "Insufficient stock";
  }

  // Checking if the product is already present in the cart
  const existing = cartItems.find((item) => item.productId === productId);

  // If product exists in cart, increase its quantity
  if (existing) {
    existing.quantity += quantity;
  }
  // If product is not present in cart, add it as a new item
  else {
    cartItems.push({ productId, quantity });
  }

  // Returning success message after adding product
  return "Added to cart";
}

// Function to remove a product from the cart completely
// Parameter: productId -> id of the product to remove
export function removeFromCart(productId) {
  // Filtering cart items and removing the product that matches productId
  cartItems = cartItems.filter((item) => item.productId !== productId);

  // Returning confirmation message
  return "Item removed from cart";
}

// Function to update the quantity of a product in the cart
// Parameters: productId -> id of the product, newQuantity -> updated quantity value
export function updateQuantity(productId, newQuantity) {
  // Checking whether updated quantity is available in stock
  if (!checkStock(productId, newQuantity)) {
    return "Insufficient stock";
  }

  // Finding the item in the cart with the given productId
  const item = cartItems.find((i) => i.productId === productId);

  // If item does not exist in cart, return error message
  if (!item) return "Item not found";

  // Updating the quantity of the item
  item.quantity = newQuantity;

  // Returning confirmation message
  return "Quantity updated";
}

// Function to get all cart items with full product details
// Returns an array of objects containing product info + quantity
export function getCartItems() {
  return cartItems.map((item) => {
    // Fetching full product details for each cart item
    const product = getProductById(item.productId);

    // Returning combined product details along with quantity
    return {
      ...product,
      quantity: item.quantity,
    };
  });
}

// Function to calculate the total price of the cart
// Total = sum of (price * quantity) for each cart item
export function getCartTotal() {
  return getCartItems().reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
}

// Function to clear all items in the cart
// This resets cartItems to an empty array
export function clearCart() {
  cartItems = [];
}
