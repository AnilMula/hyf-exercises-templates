const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals.json");

app.get("/", async (request, response) => {
  response.send("asd");
});

module.exports = app;
