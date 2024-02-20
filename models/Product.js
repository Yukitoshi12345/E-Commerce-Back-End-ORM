// Import the Sequelize Model and DataTypes objects from the 'sequelize' library 
const { Model, DataTypes } = require('sequelize');

// Import the sequelize instance from the '../config/connection.js' file
const sequelize = require('../config/connection');

// Define the Product model using the Sequelize Model class
class Product extends Model {}

// Initialise the Product model with the following properties:
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
    },
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
    // Set the model name to 'product'
    modelName: 'product',
  }
);

// Export the Product model for use in other parts of the application
module.exports = Product;
