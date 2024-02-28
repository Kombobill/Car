const mysql = require('mysql');

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'Kombogates25',
  database        : 'mysql'
});

// Define the DashboardData model
class DashboardData {
  static getSomeData(callback) {
    // Example query to retrieve data
    pool.query('SELECT * FROM dashboard_data', (error, results, fields) => {
      if (error) return callback(error);
      callback(null, results);
    });
  }

  // Add more methods as needed
}

module.exports = DashboardData;
