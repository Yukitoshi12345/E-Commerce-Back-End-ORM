// Import the Express Router module to create a router instance
const router = require("express").Router();

// Import routes defined in separate files for different resource categories
const categoryRoutes = require("./category-routes"); // Contains routes for managing categories
const productRoutes = require("./product-routes"); // Contains routes for managing products
const tagRoutes = require("./tag-routes"); // Contains routes for managing tags

// Mount imported routes under specific path prefixes for organisation
router.use("/categories", categoryRoutes); // Handle category-related requests under /categories
router.use("/products", productRoutes); // Handle product-related requests under /products
router.use("/tags", tagRoutes); // Handle tag-related requests under /tags

// Export the router object to make it available for use in other parts of the application
module.exports = router;
