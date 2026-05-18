# Backend Development Summary

## 1. Git Repository Initialization
Initialized a Git repository using `git init` to manage version control, track changes, and collaborate efficiently during development.

---

## 2. .gitignore Configuration
Created a `.gitignore` file to exclude unnecessary and sensitive files such as `node_modules` and `.env` from being pushed to GitHub.

---

## 3. Environment Variables Setup
Configured environment variables using a `.env` file and the `dotenv` package to securely store sensitive data like MongoDB URL, JWT secret key, and server port.

---

## 4. Package Initialization
Generated `package.json` using `npm init -y` to manage project metadata, dependencies, and scripts.

---

## 5. Express Application Setup
Created an Express.js server application to handle backend logic, routing, middleware integration, and API requests.

---

## 6. Database Connection
Connected the backend application to MongoDB using Mongoose for efficient database operations and schema management.

---

## 7. Middleware Integration
Implemented middleware functionalities including:
- `express.json()` for parsing request bodies
- Authentication middleware for protected routes
- Error handling middleware for centralized error management

---

## 8. Schema & Model Design
Designed MongoDB schemas and models using Mongoose to structure and manage application data efficiently.

---

## 9. REST API Development
Designed and implemented RESTful APIs for handling different resources and performing CRUD operations.

---

## 10. Registration & Login System
Implemented secure user authentication using:
- Password hashing with bcrypt
- JWT token generation for authorization
- Login and registration functionalities

---

## 11. Common Authentication Service
Created a reusable authentication service for both USER and AUTHOR roles to avoid code duplication and improve maintainability.

---

## 12. Role-Based API Handling
Implemented role-based registration logic where the client does not send the role manually. Instead, dedicated API routes assign hardcoded roles internally.

Example:
- `/api/users/register` → USER role
- `/api/authors/register` → AUTHOR role

---

## 13. Project Architecture
Followed a clean backend architecture with separate folders for:
- Routes
- Controllers
- Models
- Services
- Middleware
- Configuration files

to improve scalability and maintainability.

---

## 14. Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv
- Nodemon
- Git & GitHub
