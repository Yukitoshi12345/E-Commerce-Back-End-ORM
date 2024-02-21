// Import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// Belongs to one **Category** model (one-to-many relationship)
Product.belongsTo(Category, {
  foreignKey: "category_id"
});

// Categories have many Products
// Has many **Product** models (one-to-many relationship)
Category.hasMany(Product, {
  foreignKey: "category_id"
});

// Products belongToMany Tags (through ProductTag)
// Belongs to many **Tag** models (many-to-many relationship)
// The relationship is established through the **ProductTag** model
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
// Belongs to many **Product** models (many-to-many relationship)
// The relationship is established through the **ProductTag** model which acts as a join table
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});

// Export all models for use in other parts of your application
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};