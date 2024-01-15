const express = require("express");
const app = express();

const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: false }));
mongoose
  .connect("mongodb://127.0.0.1:27017/nodejstutorial")
  .then(() => console.log("Mongodb connected"))
  .catch((err) => {
    console.log("Error while conectiong mongodb", err);
  });
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);

app.get("/api/users", async (req, res) => {
  const alluser = await User.find({});
  res.status(200).json(alluser);
});

app.get("/api/users/:id", async (req, res) => {
  const data = await User.findById(req.params.id);
  console.log(data);
  res.status(200).json(data);
});
app.post("/api/usersnew", async (req, res) => {
  const body = req.body;
  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
  });
  res.status(201).json({ msg: "Entry Created Done" });
});

app.listen(8000, (req, res) => {
  console.log("Server is listening from port 8000");
});
