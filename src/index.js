const database = require("./database");
const App = require("./server");

database();
App().listen(3000);
