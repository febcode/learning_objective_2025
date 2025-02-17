Here’s a **Node.js API** using **Express** and **MongoDB (Mongoose)** to manage users and tasks.  

It includes:  
✅ **User creation**  
✅ **Task creation**  
✅ **MongoDB with Mongoose**  
✅ **Validation**  

---

## **📌 Steps to Run**
1. **Initialize a project**  
   ```sh
   mkdir task-manager-api && cd task-manager-api
   npm init -y
   ```

2. **Install dependencies**  
   ```sh
   npm install express mongoose dotenv body-parser
   ```

3. **Create files:**  
   ```sh
   touch server.js models/User.js models/Task.js routes/userRoutes.js routes/taskRoutes.js .env
   ```

---

## **1️⃣ Configure Environment Variables (`.env`)**
Replace `your_mongo_uri` with your actual **MongoDB URI**.
```
PORT=5000
// MONGO_URI=your_mongo_uri
MONGO_URI=mongodb://localhost:27017/task_management
```

---

## **2️⃣ Define User Model (`models/User.js`)**
```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
```

---

## **3️⃣ Define Task Model (`models/Task.js`)**
```javascript
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  due_date: { type: Date },
  status: { 
    type: String, 
    enum: ["pending", "in-progress", "completed"], 
    default: "pending" 
  },
  assignee: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, 
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Task", taskSchema);
```

---

## **4️⃣ User Routes (`routes/userRoutes.js`)**
```javascript
const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Create a new user
router.post("/users", async (req, res) => {
  try {
    const { username, email, password_hash } = req.body;
    const user = new User({ username, email, password_hash });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all users
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;
```

---

## **5️⃣ Task Routes (`routes/taskRoutes.js`)**
```javascript
const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

// Create a new task
router.post("/tasks", async (req, res) => {
  try {
    const { title, description, due_date, status, assignee } = req.body;
    const task = new Task({ title, description, due_date, status, assignee });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all tasks
router.get("/tasks", async (req, res) => {
  const tasks = await Task.find().populate("assignee", "username email");
  res.json(tasks);
});

module.exports = router;
```

---

## **6️⃣ Main Server File (`server.js`)**
```javascript
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(bodyParser.json());

app.use("/api", userRoutes);
app.use("/api", taskRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

---

## **7️⃣ Run the API**
```sh
node server.js
```
OR use **nodemon** for live reload:
```sh
npm install -g nodemon
nodemon server.js
```

---

## **📌 API Endpoints**
📍 **Create a User**
```http
POST /api/users
Content-Type: application/json
```
**Body:**
```json
{
  "username": "roshni",
  "email": "@gmail.com",
  "password_hash": "mysecurepassword"
}
```

📍 **Get All Users**
```http
GET /api/users
```

📍 **Create a Task**
```http
POST /api/tasks
Content-Type: application/json
```
**Body:**
```json
{
  "title": "Complete project report",
  "description": "Prepare and submit the final project report.",
  "due_date": "2025-02-20T18:00:00Z",
  "status": "pending",
  "assignee": "65d28f3a2f8b9a001c8e4d9a" 
}
```

📍 **Get All Tasks (With Assignee Info)**
```http
GET /api/tasks
```

---

