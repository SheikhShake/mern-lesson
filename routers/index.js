/*
    Routers are responsible to document APIs
*/

const express = require("express");
const app = express();
const { create, findAll } = require("../controllers/comedian-controller");
const {
  create: createShow,
  findAll: findAllShow,
} = require("../controllers/show-controller");

// Middleware
app.use(express.json());

// Endpoints
app.post("/comedians", create);
app.get("/comedians", findAll);
app.post("/shows", createShow);
app.get("/shows", findAllShow);
app.put("/shows/:id", (req, res) => {
  throw "not implemented";
});
app.delete("/shows/:id", (req, res) => {
  throw "not implemented";
});

// Start server
app.listen(3000, () => {
  console.log("Listening to port 3000...");
});
