const express = require("express");
const router = express.Router();
const {
  handlegenerateNewurl,
  handleredirecturl,
  getAllUrlsdata,
} = require("../Controller/url");

router.get("/getalldata", getAllUrlsdata);
router.post("/", handlegenerateNewurl);
router.get("/:id", handleredirecturl);
module.exports = router;
