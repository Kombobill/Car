const mysql = require('mysql');

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'Kombogates25',
  database        : 'mysql'
});

// Define the Product model
class Product {
  static getAll(callback) {
    pool.query('SELECT * FROM products', (error, results, fields) => {
      if (error) return callback(error);
      callback(null, results);
    });
  }

  static getById(id, callback) {
    pool.query('SELECT * FROM products WHERE id = ?', [id], (error, results, fields) => {
      if (error) return callback(error);
      callback(null, results[0]);
    });
  }

  // Add more methods as needed
}

module.exports = Product;
