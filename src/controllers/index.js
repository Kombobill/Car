// src/controllers/index.js
const authController = require('./authController');
const productController = require('./productController');
const purchaseController = require('./purchaseController');
const dashboardController = require('./dashboardController');
const paymentController = require('./paymentController');

module.exports = {
  authController,
  productController,
  purchaseController,
  dashboardController,
  paymentController
};
