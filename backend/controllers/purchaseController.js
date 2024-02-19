const mysql = require('mysql');

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_database_name'
});

const purchaseProduct = (req, res) => {
  // Extract data from the request body
  const { user_id, product_id, quantity } = req.body;

  // Validate input data (e.g., check if user_id and product_id are valid)

  // Construct the SQL query
  const query = 'INSERT INTO purchases (user_id, product_id, quantity) VALUES (?, ?, ?)';
  const values = [user_id, product_id, quantity];

  // Execute the query
  pool.query(query, values, (error, results) => {
    if (error) {
      console.error('Error purchasing product:', error);
      res.status(500).json({ error: 'Failed to purchase product' });
    } else {
      res.status(200).json({ message: 'Product purchased successfully' });
    }
  });
};

module.exports = {
  purchaseProduct,
};
