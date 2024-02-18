// src/app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const config = require('./config');

const app = express();

// Connect to the database
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api', routes); // Mount the routes under /api

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
