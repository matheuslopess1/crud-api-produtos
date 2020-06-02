const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
  index: async (req, res) => {
    const products = await Product.find();

    return res.json(products);
  },
};
