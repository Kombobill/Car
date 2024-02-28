const mysql = require('mysql');

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'Kombogates25',
  database        : 'mysql'
});

// Define the Purchase model
class Purchase {
  static create(data, callback) {
    pool.query('INSERT INTO purchases SET ?', data, (error, results, fields) => {
      if (error) return callback(error);
      callback(null, results);
    });
  }

  // Add more methods as needed
}

module.exports = Purchase;
