const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchaseController');

// Define purchase routes
router.post('/purchase', purchaseController.purchaseProduct);

module.exports = router;
