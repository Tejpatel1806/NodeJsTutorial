const express = require("express");
const router = express.Router();
const { getAllUser, getUserById, usernewEntry } = require("../controller/user");
router.route("/").get(getAllUser).post(usernewEntry);
router.get("/:id", getUserById);

module.exports = router;
