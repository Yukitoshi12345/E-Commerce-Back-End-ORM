// Import Product model from the models directory
const { Product } = require('../models');

// Define an array of objects representing seed data for products
const productData = [

  // Seed data for the "Plain T-Shirt" product
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },

  // Seed data for the "Running Sneakers" product
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    stock: 25,
    category_id: 5,
  },

  // Seed data for the "Branded Baseball Hat" product
  {
    product_name: 'Branded Baseball Hat',
    price: 22.99,
    stock: 12,
    category_id: 4,
  },

  // Seed data for the "Top 40 Music Compilation Vinyl Record" product
  {
    product_name: 'Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    stock: 50,
    category_id: 3,
  },

  // Seed data for the "Cargo Shorts" product
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    stock: 22,
    category_id: 2, 
  },
];

// Function to seed the database with initial product data
const seedProducts = async () => {
  // Use Sequelize's bulkCreate method to create multiple products at once
  await Product.bulkCreate(productData);
};

// Export the `seedProducts` function to make it available for use
module.exports = seedProducts;
