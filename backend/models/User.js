const mysql = require('mysql');

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'Kombogates25',
  database        : 'mysql'
});

// Define the User model
class User {
  static getAll(callback) {
    pool.query('SELECT * FROM users', (error, results, fields) => {
      if (error) return callback(error);
      callback(null, results);
    });
  }

  static getById(id, callback) {
    pool.query('SELECT * FROM users WHERE id = ?', [id], (error, results, fields) => {
      if (error) return callback(error);
      callback(null, results[0]);
    });
  }

  // Add more methods as needed
}

module.exports = User;
