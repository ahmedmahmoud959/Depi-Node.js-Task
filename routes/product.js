const express = require("express");
const router = express.Router();

const Joi = require("joi");
const { Product } = require("../models/Product");

/// data validation
const schema = Joi.object({
  proName: Joi.string().trim().max(100).required(),
  brand: Joi.string().trim().max(100).required(),
  category: Joi.string().trim().max(100).required(),
  quantity: Joi.number().min(0).required(),
  price: Joi.number().min(0).precision(2).required(),
  discount: Joi.number().min(0).precision(2).required(),
});

const updateSchema = Joi.object({
  proName: Joi.string().trim().max(100),
  brand: Joi.string().trim().max(100),
  category: Joi.string().trim().max(100),
  quantity: Joi.number().min(0),
  price: Joi.number().min(0).precision(2),
  discount: Joi.number().min(0).precision(2),
});

// get all products data
router.get("/", async (req, res) => {
  const allBooks = await Product.find();
  res.json(allBooks);
});

// add products
router.post("/", async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.json(error.details[0].message);
  }

  const product = new Product({
    proName: req.body.proName,
    brand: req.body.brand,
    category: req.body.category,
    quantity: req.body.quantity,
    price: req.body.price,
    discount: req.body.discount,
  });
  const result = await product.save();
  res.json(result);
});

// get product by id
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.json({ message: "Book not found" });
  }
});

// Delete book
router.delete("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "book is deleted" });
  } else {
    res.json({ message: "Book not found" });
  }
});

// Update book

router.put("/:id", async (req, res) => {
  const { error } = updateSchema.validate(req.body);
  if (error) {
    return res.json(error.details[0].message);
  }

  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        proName: req.body.proName,
        brand: req.body.brand,
        category: req.body.category,
        quantity: req.body.quantity,
        price: req.body.price,
        discount: req.body.discount,
      },
    },
    { new: true }
  );
  res.json(product);
});

// export module
module.exports = router;
