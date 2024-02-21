// Import seeding functions for different data categories
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

// Import the database connection instance from its configuration file
const sequelize = require('../config/connection');

// Define a function to synchronise the database schema and seed all data
const seedAll = async () => {
  try {
    // Synchronise the database schema, potentially dropping and recreating tables
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    // Seed each data category sequentially, logging progress

    // Seed categories
    await seedCategories();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    // seed products
    await seedProducts();
    console.log('\n----- PRODUCTS SEEDED -----\n');

    // seed tags
    await seedTags();
    console.log('\n----- TAGS SEEDED -----\n');

    // seed product tags
    await seedProductTags();
    console.log('\n----- PRODUCT TAGS SEEDED -----\n');

    // Exit the process with a success code
    process.exit(0);
  } catch (error) {
    console.error('Error during seeding process:', error);
    process.exit(1); // Exit with an error code
  }
};

// Call the seedAll function to initiate the seeding process
seedAll();
