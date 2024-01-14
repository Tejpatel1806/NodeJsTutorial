const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Home page");
});

app.get("/about", (req, res) => {
  res.send("Hello from About page " + req.query.name);
});

app.listen(8080, (err) => {
  console.log("server listening port no 8080");
});
