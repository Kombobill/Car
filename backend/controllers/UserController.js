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

  //getUserById

  getUserById: (req, res) => {
    const userId = req.params.id; // Assuming the user ID is passed as a route parameter
    User.getUserById(userId, (error, user) => {
      if (error) {
        return res.status(500).json({ error: 'Error fetching user data' });
      }
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.status(200).json({ data: user });
    });
  },
  
  // update user

  updateUser: (req, res) => {
    const userId = req.params.id; // Assuming the user ID is passed as a route parameter
    const userData = req.body;
    User.updateUser(userId, userData, (error, result) => {
      if (error) {
        return res.status(500).json({ error: 'Error updating user' });
      }
      return res.status(200).json({ message: 'User updated successfully' });
    });
  },

  // delete user

  deleteUser: (req, res) => {
    const userId = req.params.id; // Assuming the user ID is passed as a route parameter
    User.deleteUser(userId, (error, result) => {
      if (error) {
        return res.status(500).json({ error: 'Error deleting user' });
      }
      return res.status(200).json({ message: 'User deleted successfully' });
    });
  }
  
  
};

module.exports = UserController;
