const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    proName: { type: String, required: true, trim: true, maxlength: 100 },
    brand: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    quantity: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 100,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 6,
    },
    discount: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = { Product };
