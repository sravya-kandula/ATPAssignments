import { reduceStock } from "./product.js";
import { getCartItems, getCartTotal, clearCart } from "./cart.js";
import { applyDiscount } from "./discount.js";

export function validatePaymentMethod(method) {
  return ["card", "upi", "cod"].includes(method);
}

export function processPayment(paymentMethod, couponCode = null) {
  if (!validatePaymentMethod(paymentMethod)) {
    return { status: "failed", message: "Invalid payment method" };
  }

  const items = getCartItems();
  const subtotal = getCartTotal();

  const discountResult = couponCode
    ? applyDiscount(subtotal, couponCode, items)
    : { discount: 0, finalTotal: subtotal };

  items.forEach((item) => {
    reduceStock(item.id, item.quantity);
  });

  clearCart();

  return {
    orderId: generateOrderId(),
    items,
    subtotal,
    discount: discountResult.discount || 0,
    total: discountResult.finalTotal,
    paymentMethod,
    status: "success",
    message: "Order placed successfully",
  };
}

function generateOrderId() {
  return "ORD" + Date.now();
}
