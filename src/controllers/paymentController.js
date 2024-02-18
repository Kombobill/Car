// src/controllers/paymentController.js
const paymentService = require('../services/paymentService');

exports.processPayment = (req, res) => {
  // Logic to handle payment processing
  paymentService.processPayment(req.body.amount, req.body.cardDetails, (result) => {
    res.json({ success: result });
  });
};
