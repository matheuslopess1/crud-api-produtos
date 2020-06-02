const express = require("express");
const cors = require("cors");

module.exports = function App() {
  const app = express();

  function preMiddlewares() {
    app.use(express.json());
    app.use(cors());
  }

  function routes() {
    app.use("/api", require("./routes"));
  }

  function postMiddlewares() {
    app.use(require("./app/middlewares/catchError"));
  }

  preMiddlewares();
  routes();
  postMiddlewares();

  return app;
};
