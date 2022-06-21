const router = require("express").Router();
const res = require("express/lib/response");
const { Content } = require("../../models");

//localhost:3001/api/content
router.get("/", async (req, res) => {
  //   try {
  const contentData = await Content
    .findAll
    //   {
    //   include: [{ model: Category }],
    // }
    ()
    .catch((err) => {
      res.json(err);
    });

  // const contents = contentData.map((content) => content.get({ plain: true }));

  res.render("homepage", { contentData });
  // res.status(200).json(contentData);
  //   catch (err) {
  //     res.status(500).json(err);
  //   }
});

// GET Single piece of contant
router.get("/:id", async (req, res) => {
  try {
    const contentData = await Content.findByPk(
      req.params.id
      //   {
      //   include: [{ model: Category }],
      // }
    );
    // .catch((err) => {
    //   res.json(err);
    // });

    res.status(200).json(contentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST new content
router.post("/", async (req, res) => {
  try {
    const contentData = await Content.create(req.body);
    console.log(contentData);
    res.status(200).json(contentData.get({ plain: true }));
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
