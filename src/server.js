const express = require("express");
const cors = require("cors");

module.exports = function App() {
  const app = express();

  app.use(express.json());
  app.use(cors());

  function middlewares() {
    app.use(express.json());
    app.use(cors());
  }

  function routes() {
    app.use("/api", require("./routes"));
  }

  middlewares();
  routes();

  return app;
};
