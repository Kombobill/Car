const User = require('../models/User');

const login = (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password are provided
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // Check if the user exists in the database
  User.findOne({ username, password }, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Internal server error' });
    }
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    // User found, send success response
    res.status(200).json({ message: 'Login successful', user });
  });
};

const register = (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password are provided
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // Check if the user already exists in the database
  User.findOne({ username }, (err, existingUser) => {
    if (err) {
      return res.status(500).json({ message: 'Internal server error' });
    }
    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists' });
    }
    // Create a new user
    const newUser = new User({ username, password });
    newUser.save((err, savedUser) => {
      if (err) {
        return res.status(500).json({ message: 'Internal server error' });
      }
      // User created successfully
      res.status(201).json({ message: 'User registered successfully', user: savedUser });
    });
  });
};

module.exports = {
  login,
  register,
};
