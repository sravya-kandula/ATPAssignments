// 1. Get only active users
const activeUsers = users.filter((user) => user.active);

// 2. Extract names of active users
const activeUserNames = activeUsers.map((user) => user.name);

// 3. Check if any admin exists
const adminExists = users.some((user) => user.role === "admin");

// 4. Find user by id
const findUserById = (id) => users.find((user) => user.id === id);

// 5. Deactivate a user immutably
const deactivateUser = (id) =>
  users.map((user) => (user.id === id ? { ...user, active: false } : user));
