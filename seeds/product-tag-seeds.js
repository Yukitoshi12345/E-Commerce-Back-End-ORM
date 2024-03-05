// Import ProductTag model from the models directory
const { ProductTag } = require("../models");

// Define an array of objects representing seed data for product tag associations
const productTagData = [
  // Associate product_id 1 with tags 6, 7, and 8
  {
    product_id: 1,
    tag_id: 6,
  },
  {
    product_id: 1,
    tag_id: 7,
  },
  {
    product_id: 1,
    tag_id: 8,
  },

  // Associate product_id 2 with tag 6
  {
    product_id: 2,
    tag_id: 6,
  },

  // Associate product_id 3 with tag 1, 3, 4, 5
  {
    product_id: 3,
    tag_id: 1,
  },
  {
    product_id: 3,
    tag_id: 3,
  },
  {
    product_id: 3,
    tag_id: 4,
  },
  {
    product_id: 3,
    tag_id: 5,
  },

  // Associate product_id 4 with tag 1, 2, 8
  {
    product_id: 4,
    tag_id: 1,
  },
  {
    product_id: 4,
    tag_id: 2,
  },
  {
    product_id: 4,
    tag_id: 8,
  },

  // Assoicate product_id 5 with tag 5
  {
    product_id: 5,
    tag_id: 3,
  },
];

// Funtction to seed the database with initial product-tag associations
const seedProductTags = async () => {
  // Use Sequelize's bulkCreate method to create multiple associations at once
  await ProductTag.bulkCreate(productTagData);
};

// Export the `seedProductTags` function to make it available for use
module.exports = seedProductTags;
