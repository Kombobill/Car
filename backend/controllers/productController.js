// Import MySQL connection if needed
// const connection = require('../database');

const getAllProducts = (req, res) => {
  // Query to retrieve all products
  const query = 'SELECT * FROM products';

  // Execute the query
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error retrieving products:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    // If products are retrieved successfully, send them in the response
    res.status(200).json({ products: results });
  });
};

const getProductById = (req, res) => {
  const productId = req.params.id;

  // Query to retrieve a product by ID
  const query = 'SELECT * FROM products WHERE id = ?';
  const values = [productId];

  // Execute the query
  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error retrieving product by ID:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    // If product is retrieved successfully, send it in the response
    if (results.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ product: results[0] });
  });
};

module.exports = {
  getAllProducts,
  getProductById,
};
