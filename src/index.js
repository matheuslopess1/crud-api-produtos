require("dotenv-safe").config();
const database = require("./database");
const App = require("./server");

database();
App().listen(process.env.PORT || 3000);
