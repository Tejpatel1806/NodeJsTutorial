const express = require("express");
const app = express();

const databaseconncetion = require("./ConnectionFile");
const router = require("./routes/userroute");
databaseconncetion();
app.use(express.urlencoded({ extended: false }));
app.use("/api/users", router);

app.listen(8000, (err) => {
  if (!err) {
    console.log("Server is listening from port number 8000");
  }
});
