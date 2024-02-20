// Import the Sequelize Model and DataTypes objects from the 'sequelize' library
const { Model, DataTypes } = require('sequelize');

// Import the sequelize instance from the '../config/connection.js' file
const sequelize = require('../config/connection');

// Define the ProductTag model using the Sequelize Model class
class ProductTag extends Model {}

// Initialise the ProductTag model with the following properties:
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    // Associate the model with the sequelize instance
    sequelize,
    // Disable timestamps for this model
    timestamps: false,
    // Prevent Sequelize from pluralising the table name
    freezeTableName: true,
    // Use underscores instead of camelCase for field names
    underscored: true,
    // Set the model name to 'product_tag'
    modelName: 'product_tag',
  }
);

// Export the ProductTag model for use in other parts of the application
module.exports = ProductTag;
