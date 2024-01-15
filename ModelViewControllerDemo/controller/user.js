const User = require("../model/user");

const getAllUser = async (req, res) => {
  const alluser = await User.find({});
  res.status(200).json(alluser);
};

const getUserById = async (req, res) => {
  const data = await User.findById(req.params.id);
  res.status(200).json(data);
};
const usernewEntry = async (req, res) => {
  const body = req.body;
  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
  });
  res.status(201).json({ msg: "Entry Created Done" });
};
module.exports = { getAllUser, getUserById, usernewEntry };
