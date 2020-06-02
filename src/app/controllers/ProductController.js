const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
  index: async (req, res) => {
    const products = await Product.find();

    return res.json(products);
  },

  show: async (req, res) => {
    const product = await Product.findById(req.params.id);

    return res.json(product);
  },

  store: async (req, res) => {
    const product = await Product.create(req.body);

    return res.status(201).json(product);
  },

  update: async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(product);
  },

  destroy: async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);

    return res.json();
  },
};
