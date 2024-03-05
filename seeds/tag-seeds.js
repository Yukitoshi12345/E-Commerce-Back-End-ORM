// Import tag model from the models directory
const { Tag } = require("../models");

// Define an array of objects representing seed data for tags
const tagData = [
  {
    // Seed data for the "rock music" tag
    tag_name: "rock music",
  },

  {
    // Seed data for the "pop music" tag
    tag_name: "pop music",
  },

  {
    // Seed data for the "blue" tag
    tag_name: "blue",
  },

  {
    // Seed data for the "red" tag
    tag_name: "red",
  },

  {
    // Seed data for the "green" tag
    tag_name: "green",
  },

  {
    // Seed data for the "white" tag
    tag_name: "white",
  },

  {
    // Seed data for the "gold" tag
    tag_name: "gold",
  },

  {
    // Seed data for the "pop culture" tag
    tag_name: "pop culture",
  },
];

// Function to seed the database with initial tag data
const seedTags = async () => {
  // Use Sequelize's bulkCreate method to create multiple associations at once
  await Tag.bulkCreate(tagData);
};

// Export the `seedTags` function to make it available for use
module.exports = seedTags;
