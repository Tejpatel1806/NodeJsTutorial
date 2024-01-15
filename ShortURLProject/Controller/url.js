const shortid = require("shortid");
const URL = require("../models/url");
const handlegenerateNewurl = async (req, res) => {
  const shortId = shortid();
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ msg: "URL is required" });
  }
  await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitHistory: [],
  });
  res.json({ id: shortId });
};
const getAllUrlsdata = async (req, res) => {
  const alldata = await URL.find({});
  res.render("home", {
    urls: alldata,
  });
};
const handleredirecturl = async (req, res) => {
  const shortId = req.params.id;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );
  res.redirect(entry.redirectURL);
};
module.exports = { handlegenerateNewurl, handleredirecturl, getAllUrlsdata };
