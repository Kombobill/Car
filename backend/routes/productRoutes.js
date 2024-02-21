const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Define product routes
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);

module.exports = router;
