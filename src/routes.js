const express = require("express");
const ProductController = require("./app/controllers/ProductController");

const routes = express.Router();

routes.get("/products", ProductController.index);

module.exports = routes;
