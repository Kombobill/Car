// src/services/paymentService.js

exports.processPayment = (amount, cardDetails, callback) => {
    // Logic to integrate with payment gateway and process payment
    // For simplicity, we just simulate a successful payment
    const success = Math.random() > 0.5; // 50% success rate
  
    callback(success);
  };
  