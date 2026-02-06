// 1. Get published courses
const publishedCourses = courses.filter((course) => course.published);

// 2. Sort courses by price (high → low)
const sortedByPriceDesc = [...publishedCourses].sort(
  (a, b) => b.price - a.price,
);

// 3. Extract { title, price } only
const courseSummaries = publishedCourses.map(({ title, price }) => ({
  title,
  price,
}));

// 4. Calculate total value of published courses
const totalPublishedValue = publishedCourses.reduce(
  (sum, course) => sum + course.price,
  0,
);

// 5. Add a new course immutably
const addCourse = (newCourse) => [...courses, newCourse];
