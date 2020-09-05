const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  category: {
    type: String,
    // required: ["a product must have a name", true],
  },
  subCategory: {
    type: String,
    // required: [true, "Enter subcategory"],
  },
  name: {
    type: String,
    unique: false,
    // required: [true, "Enter product name"],
  },
  types: {
    type: String,
  },
  purchase: {
    type: Number,
    // required: [true, "enter the purchase price"],
  },
  sale: {
    type: Number,
    // required: [true, "enter the sales price"],
  },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
