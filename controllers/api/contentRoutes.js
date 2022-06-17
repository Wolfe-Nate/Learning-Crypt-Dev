const router = require("express").Router();
const { Content } = require("../../models");

//GET/Content Route
router.get("/", async (req, res) => {
  try {
    const contentData = await Content.create();

    res.status(200).json(contentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
