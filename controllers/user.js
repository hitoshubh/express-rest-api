const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "1h" });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Failed to get User." });
  }
};

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (user) {
    return res.status(409).json({ message: "User already exists." });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await User.create({ username, password: hashedPassword });
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ error: "User registration failed" });
  }
};

module.exports = {
  loginUser,
  registerUser,
};
