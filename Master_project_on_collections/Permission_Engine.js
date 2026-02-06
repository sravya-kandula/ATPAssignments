// 1. Get all role names
const roleNames = Object.keys(roles);

// 2. Check if student can delete
const canStudentDelete = roles.student.includes("delete");

// 3. Create a flat list of all unique permissions
const uniquePermissions = [...new Set(Object.values(roles).flat())];

// 4. Add new role moderator immutably
const addModeratorRole = {
  ...roles,
  moderator: ["view", "update"],
};
