// Object that stores all available coupons in the system
// Each coupon has a type (percentage/flat), value, and minimum cart amount condition
const coupons = {
  WELCOME10: { type: "percentage", value: 10, minAmount: 1000 }, // 10% discount if cart total >= 1000
  FLAT500: { type: "flat", value: 500, minAmount: 5000 }, // Flat 500 discount if cart total >= 5000
  ELECTRONICS20: {
    type: "percentage",
    value: 20,
    minAmount: 10000, // 20% discount if cart total >= 10000
    category: "electronics", // Coupon applies only if cart has electronics category items
  },
};

// Function to validate whether the coupon is applicable or not
// Parameters:
// code -> coupon code entered by the user
// cartTotal -> total price of items in cart
// cartItems -> list of cart products (used to validate category-based coupons)
export function validateCoupon(code, cartTotal, cartItems) {
  // Fetching coupon details from coupons object
  const coupon = coupons[code];

  // If coupon code does not exist, return invalid response
  if (!coupon) return { valid: false, message: "Invalid coupon" };

  // Checking if cart total meets the minimum amount required for coupon
  if (cartTotal < coupon.minAmount) {
    return { valid: false, message: "Minimum amount not met" };
  }

  // If coupon is category-based, check if cart contains that category product
  if (coupon.category) {
    const hasCategory = cartItems.some(
      (item) => item.category === coupon.category,
    );

    // If required category product is not found, coupon is not applicable
    if (!hasCategory) {
      return { valid: false, message: "Coupon not applicable for this cart" };
    }
  }

  // If all validations pass, return valid response
  return { valid: true, message: "Coupon applied" };
}

// Function to calculate discount amount based on coupon type
// Parameters:
// code -> coupon code entered by user
// cartTotal -> total amount of cart before discount
export function calculateDiscount(code, cartTotal) {
  // Fetching coupon details from coupons object
  const coupon = coupons[code];

  // If coupon type is percentage, calculate discount percentage of cartTotal
  if (coupon.type === "percentage") {
    return (cartTotal * coupon.value) / 100;
  }

  // If coupon type is flat, directly return fixed discount value
  return coupon.value;
}

// Function to apply discount to the cart total
// Parameters:
// cartTotal -> original total price of cart
// code -> coupon code entered by user
// cartItems -> list of cart products for category validation
export function applyDiscount(cartTotal, code, cartItems) {
  // Validating the coupon first
  const validation = validateCoupon(code, cartTotal, cartItems);

  // If coupon is not valid, return cart total without discount
  if (!validation.valid) {
    return {
      originalTotal: cartTotal, // original total before discount
      discount: 0, // no discount applied
      finalTotal: cartTotal, // final total remains same
      message: validation.message, // error message why coupon failed
    };
  }

  // Calculating discount amount if coupon is valid
  const discount = calculateDiscount(code, cartTotal);

  // Returning final total after applying discount
  return {
    originalTotal: cartTotal, // original total before discount
    discount, // calculated discount value
    finalTotal: cartTotal - discount, // total after discount applied
    message: "Discount applied successfully", // success message
  };
}
