const express = require("express");
const request = require("supertest");
const person = require("./person");

const app = express();

//create a route
app.get("/", (req, res) => {
  res.send("Helooooooo");
});

// a person
const person1 = new person.PersonO("anil", 30);
const greeting = person1.greetings();

app.get("/user", (req, res) => {
  res.send(greeting);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server started runnung at ${PORT}`);
});
