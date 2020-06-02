const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://192.168.99.100:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

requireDir("./app/models");

app.use("/api", require("./routes"));

app.listen(3000);
