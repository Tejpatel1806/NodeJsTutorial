const mongoose = require("mongoose");
function connectiondatabase() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/shorturl")
    .then(() => console.log("Mongodb connected"))
    .catch((err) => {
      console.log("Error while conectiong mongodb", err);
    });
}
module.exports = connectiondatabase;
