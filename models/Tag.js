// Import the Sequelize Model and DataTypes objects from the 'sequelize' library
const { Model, DataTypes } = require("sequelize");

// Import the sequelize instance from the '../config/connection.js' file
const sequelize = require("../config/connection.js");

// Define the Tag model using the Sequelize Model class
class Tag extends Model {}

// Initialise the Tag model with the following properties:
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
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
    // Set the model name to 'tag'
    modelName: "tag",
  }
);

// Export the Tag model for use in other parts of the application
module.exports = Tag;
