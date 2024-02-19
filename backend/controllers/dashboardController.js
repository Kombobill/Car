// Import MySQL connection if needed
// const connection = require('../database');

const getDashboardData = (req, res) => {
  // Query to retrieve dashboard data from MySQL database
  const query = 'SELECT * FROM dashboard_data';

  // Execute the query
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error retrieving dashboard data:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    // If data is retrieved successfully, send it in the response
    res.status(200).json({ dashboardData: results });
  });
};

module.exports = {
  getDashboardData,
};
