const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// Define dashboard routes
router.get('/dashboard', dashboardController.getDashboardData);

module.exports = router;
