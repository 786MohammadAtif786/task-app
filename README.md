# Task Management Application

## Description

A full-stack **Task Management Application** built with **Node.js**, **Express.js**, and **MongoDB**  **Vue.js**. This application allows users to create, read, update, and delete tasks. The backend is implemented using **Express.js** and **MongoDB**, while user authentication is done using **JWT (JSON Web Token)**.

## Features

- User Registration and Login with JWT-based authentication.
- Create, Read, Update, and Delete (CRUD) operations for tasks.
- Tasks filtering and sorting.
- Protected routes with JWT authentication.
- MongoDB as the database.
- Express.js for backend routing and API management.
  
---

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)
- [npm](https://www.npmjs.com/get-npm)

---

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/task-management-app.git](https://github.com/786MohammadAtif786/task-app.git
    cd task-app
    ```

2. **Install dependencies:**

    Navigate to the project directory and run:

    ```bash
    npm install
    ```

---

## Setup

1. **Configure Environment Variables:**

   Create a `.env` file in the root directory of your project and add the following values:

   
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/taskmanagement
   JWT_SECRET=dnnfoie390dni30whn

  
  ## Run the backend:
      cd  backend
      node server.js
      

   ## frontend
      cd task-app
       npm install
   
  **API ENDPOINTS**
    User API
  POST=> localhost:5000/api/users/register
  POST=> localhost:5000/api/users/login

  Task API
  GET=> localhost:5000/api/tasks
  POST=> localhost:5000/api/tasks
  PUT=> localhost:5000/api/tasks/:id
  DELETE=> localhost:5000/api/tasks/:id

  ## Technologies Used 
  **Backend:**
  Node.js
  Express.js
  MongoDB (Mongoose ORM)
  JWT for authentication
  bcrypt.js for password hashing
  **Frontend:**
  Vue.js 3
  Vue Router for navigation
  Vuex or Pinia for state management
  Axios for API requests
  TailwindCSS for styling

**TOKEN**
  ![Screenshot from 2024-09-05 18-27-33](https://github.com/user-attachments/assets/c5e19bdf-3b89-4a31-afcc-fca0c53ed686)


  
