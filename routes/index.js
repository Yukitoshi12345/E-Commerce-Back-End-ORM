// Import the Express Router module to create a router instance
const router = require('express').Router();
// Import routes defined in a separate file named 'api.js'
const apiRoutes = require('./api');

// Mount the imported 'apiRoutes' under the '/api' path prefix
router.use('/api', apiRoutes);

// Define a catch-all middleware for routes that don't match any defined routes
router.use((req, res) => {
  // Send a "Wrong Route!" error message with a 404 status code (implied)
  res.send("<h1>Wrong Route!</h1>")
});

// Export the router object to make it usable in other parts of the application
module.exports = router;