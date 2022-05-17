// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      // doesnt allow null values needed
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      // doesnt allow null values needed
    },
    price: {
      type: DataTypes.DECIMAL,
      // doesnt allow null values needed
      // validates that the value is a decimal needed
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      tpye: DataTypes.INTEGER,
      // doesnt allow null values needed
      // set a default value of 10 needed
      // validates that the calue is numeric needed
    },
    category_id: {
      type: DataTypes.INTEGER,
      // references the category models id needed
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
