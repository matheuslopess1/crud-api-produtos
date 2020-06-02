const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();

mongoose.connect("mongodb://192.168.99.100:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

requireDir("./app/models");

const Product = mongoose.model("Product");

app.get("/", (req, res) => {
  Product.create({
    title: "React Native",
    description: "Build native apps with React",
    url: "http://github.com/facebook/react-native",
  });

  res.send("Hello Rocketseat");
});

app.listen(3000);
