const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Define payment routes
router.post('/checkout', paymentController.processPayment);

module.exports = router;
