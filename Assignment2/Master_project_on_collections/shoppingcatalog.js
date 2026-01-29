// 1. Merge cart with courses to get full course info
const detailedCart = cart.map((item) => {
  const course = courses.find((c) => c.id === item.courseId);
  return {
    ...item,
    title: course.title,
    price: course.price,
    published: course.published,
  };
});

// 2. Calculate total cart amount
const totalCartAmount = detailedCart.reduce(
  (total, item) => total + item.price * item.qty,
  0,
);

// 3. Increase quantity of a course (immutably)
const increaseQty = (courseId) =>
  cart.map((item) =>
    item.courseId === courseId ? { ...item, qty: item.qty + 1 } : item,
  );

// 4. Remove a course from cart
const removeFromCart = (courseId) =>
  cart.filter((item) => item.courseId !== courseId);

// 5. Check if all cart items are paid courses
const allPaidCourses = detailedCart.every((item) => item.price > 0);
