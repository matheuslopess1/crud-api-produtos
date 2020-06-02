const mongoose = require("mongoose");
const requireDir = require("require-dir");

module.exports = function database() {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  requireDir("./app/models");
};
