// src/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  // ... other fields
});

module.exports = mongoose.model('Product', productSchema);
