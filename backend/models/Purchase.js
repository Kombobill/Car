const mysql = require('mysql');

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'your_mysql_username',
  password        : 'your_mysql_password',
  database        : 'your_database_name'
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
