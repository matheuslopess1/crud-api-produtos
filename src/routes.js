const express = require("express");
const ProductController = require("./app/controllers/ProductController");

const routes = express.Router();

routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.patch("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

module.exports = routes;
