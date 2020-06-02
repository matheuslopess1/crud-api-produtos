const mongoose = require("mongoose");
const requireDir = require("require-dir");

module.exports = function database() {
  mongoose.connect("mongodb://192.168.99.100:27017/nodeapi", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });

  requireDir("./app/models");
};
