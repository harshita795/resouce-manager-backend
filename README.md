# Resource Manager - Backend

## 📌 Overview
This is the backend service for the **Resource Manager** application, built using **Node.js, Express.js, and PostgreSQL (Neon)**. It provides a RESTful API to manage learning resources (articles, videos, tutorials) with full CRUD functionality.

## 🛠 Tech Stack
- **Node.js** - JavaScript runtime
- **Express.js** - Backend framework
- **Sequelize ORM** - Database management
- **PostgreSQL (Neon)** - Database
- **dotenv** - Environment variable management
- **CORS** - Cross-Origin Resource Sharing

---

## 📥 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/resource-manager-backend.git
cd resource-manager-backend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add:
```env
DATABASE_URL=postgresql://your_username:your_password@your_neon_host/database_name?sslmode=require
PORT=4000
```

### 4️⃣ Run Database Migrations
```sh
npx sequelize-cli db:migrate
```

### 5️⃣ Start the Server
```sh
npm start
```

✅ **Server running at** `http://localhost:4000`

---

## 📡 API Endpoints

### 🔹 Get All Resources
- **URL:** `GET /resources`
- **Response:**
```json
[
  {
    "id": 1,
    "title": "Understanding Node.js",
    "description": "A deep dive into Node.js",
    "type": "Article",
    "createdAt": "2024-03-25T10:00:00.000Z",
    "updatedAt": "2024-03-25T10:00:00.000Z"
  }
]
```

### 🔹 Create a Resource
- **URL:** `POST /resources`
- **Body:**
```json
{
  "title": "Learn Express.js",
  "description": "Beginner-friendly Express.js tutorial",
  "type": "Video"
}
```
- **Response:**
```json
{
  "id": 2,
  "title": "Learn Express.js",
  "description": "Beginner-friendly Express.js tutorial",
  "type": "Video",
  "createdAt": "2024-03-25T10:05:00.000Z",
  "updatedAt": "2024-03-25T10:05:00.000Z"
}
```

### 🔹 Update a Resource
- **URL:** `PUT /resources/:id`
- **Body:**
```json
{
  "title": "Learn Express.js - Updated",
  "description": "Updated Express.js tutorial",
  "type": "Article"
}
```
- **Response:**
```json
{
  "message": "Resource updated"
}
```

### 🔹 Delete a Resource
- **URL:** `DELETE /resources/:id`
- **Response:**
```json
{
  "message": "Resource deleted"
}
```

---

## 🚀 Deployment
### **1️⃣ Deploy Backend on Render**
- **Push the Code to GitHub**
- **Go to [Render](https://render.com/)**
- **Create a New Web Service**
- **Connect GitHub Repository**
- **Add Environment Variable:**
  ```sh
  DATABASE_URL=postgresql://your_username:your_password@your_neon_host/database_name?sslmode=require
  ```
- **Deploy!** ✅

### **2️⃣ Test Deployed API**
```sh
GET https://resource-manager-backend.onrender.com/resources
```

---

## 📄 License
This project is open-source and free to use.

---

