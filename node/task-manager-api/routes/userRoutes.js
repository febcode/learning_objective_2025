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
