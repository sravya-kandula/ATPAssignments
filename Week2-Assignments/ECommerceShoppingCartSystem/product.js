// Array of products available in the E-Commerce store
// Each product contains id, name, price, stock availability, and category
const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 10, category: "electronics" },
  { id: 2, name: "Phone", price: 30000, stock: 15, category: "electronics" },
  {
    id: 3,
    name: "Headphones",
    price: 2000,
    stock: 25,
    category: "accessories",
  },
  { id: 4, name: "Mouse", price: 500, stock: 50, category: "accessories" },
  { id: 5, name: "Keyboard", price: 1500, stock: 30, category: "accessories" },
];

// Function to get a product based on its id
// Returns the product object if found, otherwise returns undefined
export function getProductById(id) {
  return products.find((p) => p.id === id);
}

// Function to return all products available in the store
// Returns the complete products array
export function getAllProducts() {
  return products;
}

// Function to return products belonging to a specific category
// Example: electronics, accessories
export function getProductsByCategory(category) {
  return products.filter((p) => p.category === category);
}

// Function to search products based on a keyword
// It matches the keyword with product name (case-insensitive)
export function searchProducts(query) {
  return products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()),
  );
}

// Function to check whether requested quantity is available in stock
// Returns true if stock is sufficient, otherwise false
export function checkStock(productId, quantity) {
  const product = getProductById(productId);

  // Checking if product exists and stock is greater than or equal to required quantity
  return product && product.stock >= quantity;
}

// Function to reduce stock after successful purchase
// It decreases the stock quantity of the product
export function reduceStock(productId, quantity) {
  const product = getProductById(productId);

  // If product exists, reduce its stock by purchased quantity
  if (product) {
    product.stock -= quantity;
  }
}
