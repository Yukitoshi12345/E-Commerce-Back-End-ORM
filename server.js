// Import the Express library to create the web application
const express = require("express");
// Import all routes defined in a separate file named "routes.js"
const routes = require("./routes");

// Import the sequelize connection from the configuration file
const sequelize = require("./config/connection");

// Create an Express application instance
const app = express();
// Define the port number to listen on. Use environment variable if available, otherwise default to 3001
const PORT = process.env.PORT || 3001;

// Configure middleware to parse JSON data in request body
app.use(express.json());
// Configure middleware to parse form data (extended: true for nested objects)
app.use(express.urlencoded({ extended: true }));

// Mount all routes imported from "routes.js"
app.use(routes);

// Turn on connection to database and server
sequelize
  .sync({ force: false }) // Set force: true to drop and recreate tables (caution!)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  });
