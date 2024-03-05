// Import Category model from the models directory
const { Category } = require("../models");

// Define an array of objects representing seed data for categories
const categoryData = [
  // Seed data for the "Shirts" category
  {
    category_name: "Shirts",
  },

  // Seed data for the "Shorts" category
  {
    category_name: "Shorts",
  },

  // Seed data for the "Music" category
  {
    category_name: "Music",
  },

  // Seed data for the "Hats" category
  {
    category_name: "Hats",
  },

  // Seed data for the "Shoes" category
  {
    category_name: "Shoes",
  },
];

// Function to seed the database with initial category data
const seedCategories = async () => {
  // Use Sequelize's bulkCreate method to create multiple categories at once
  await Category.bulkCreate(categoryData);
};

// Export the `seedCategories` function to make it available for use
module.exports = seedCategories;
