const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();

mongoose.connect("mongodb://192.168.99.100:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

requireDir("./app/models");

app.use("/api", require("./routes"));

app.listen(3000);
