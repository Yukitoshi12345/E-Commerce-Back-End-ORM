// Require the dotenv package to load environment variables
require('dotenv').config();

// Require the Sequelize library for database interaction
const Sequelize = require('sequelize');

// Check if the JAWSDB_URL environment variable is set
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL) // Use JAWSDB for Heroku
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, { // Otherwise, use local database configuration
      host: 'localhost', // Database host (localhost for local development)
      dialect: 'mysql', // Database dialect (MySQL in this case)
      dialectOptions: {
        decimalNumbers: true, // Ensure decimal numbers are handled correctly
      },
    });
  
// Export the Sequelize instance for use in other parts of the application
module.exports = sequelize;
