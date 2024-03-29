// server.js (or app.js)
// const routes = require('./routes');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
// Database connection setup for MySQL
const mysql = require('mysql');




const app = express();



const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Kombogates25',
  database: 'mysql',
  mysql_clear_password: () => () => Buffer.from('your_mysql_password'),

});

// Log the resolved path to the routes folder// Log he resolved path to the routes folder
console.log('Resolved path to routes folder:', path.resolve(__dirname, './routes'));


db.connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Middleware
app.get("/getData",(req,res)=>{
  res.send("Hello");
});
app.use(cors());
app.use(bodyParser.json());
// app.use('/api', routes);
app.post('/api/products', (req, res) => {
  // Extract data from the request body
  const { name, category, price, description } = req.body;

  // For now, let's just log the received data
  console.log('Received product data:', { name, category, price, description });

  // Send a success response
  res.status(201).json({ message: 'Product data received successfully' });
});



// Example error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

 // Mount the routes under /api

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
