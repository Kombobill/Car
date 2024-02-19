// controllers/UserController.js
const User = require('../models/User');

const UserController = {
  createUser: (req, res) => {
    const userData = req.body;
    User.createUser(userData, (error, result) => {
      if (error) {
        return res.status(500).json({ error: 'Error creating user' });
      }
      return res.status(201).json({ message: 'User created successfully', data: result });
    });
  },
  // Add other controller functions as needed
};

module.exports = UserController;
