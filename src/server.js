const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://192.168.99.100:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.send("Hello Rocketseat");
});

app.listen(3000);
