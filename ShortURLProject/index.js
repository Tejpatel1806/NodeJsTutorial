const express = require("express");
const path = require("path");
const app = express();
const urlRoute = require("./routes/url");
const databaseconncetion = require("./connection");
databaseconncetion();
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());
app.use("/url", urlRoute);
app.listen(8001, (err) => {
  if (!err) {
    console.log("Server is Listening in PORT 8001");
  }
});
