const mongoose = require("mongoose");
const Product = mongoose.model("Product");

module.exports = {
  index: async (req, res) => {
    const { page = 1 } = req.query;
    const products = await Product.paginate({}, { page, limit: 10 });

    return res.json(products);
  },

  show: async (req, res) => {
    const product = await Product.findById(req.params.id);

    return product ? res.status(404).json() : res.json(product);
  },

  store: async (req, res, next) => {
    try {
      const product = await Product.create(req.body);

      return res.status(201).json(product);
    } catch (err) {
      return next(err);
    }
  },

  update: async (req, res, next) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      return product ? res.json(product) : res.status(404).json();
    } catch (err) {
      return next(err);
    }
  },

  destroy: async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);

    return product ? res.status(204).json() : res.status(404).json();
  },
};
