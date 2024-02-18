// src/routes/index.js
const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

// Define routes using controllers
router.post('/login', controllers.authController.login);
router.post('/register', controllers.authController.register);
router.get('/products', controllers.productController.getAllProducts);
router.get('/products/:id', controllers.productController.getProductById);
router.post('/purchase', controllers.purchaseController.purchaseProduct);
router.get('/dashboard', controllers.dashboardController.getDashboardData);
router.post('/process-payment', controllers.paymentController.processPayment);

module.exports = router;
