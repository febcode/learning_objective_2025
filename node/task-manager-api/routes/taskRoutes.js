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
