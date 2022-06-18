const router = require("express").Router();
const res = require("express/lib/response");
const { Content, Category } = require("../../models");

//GET/Content Route
// router.get("/", async (req, res) => {
//   try {
//     const contentData = await Content.create();

//     res.status(200).json(contentData);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get("/", async (req, res) => {
  //   try {
  const contentData = await Content.findAll({
    include: [{ model: Category }],
  }).catch((err) => {
    res.json(err);
  });

  const contents = contentData.map((content) => content.get({ plain: true }));

  res.render("homepage", { contents });
  // res.status(200).json(contentData);
  //   catch (err) {
  //     res.status(500).json(err);
  //   }
});

// GET Single piece of contant
router.get("/:id", async (req, res) => {
  try {
    const contentData = await Content.findByPk(req.params.id, {
      include: [{ model: Category }],
    });
    res.status(200).json(contentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST new content
// router.post("/", async (req, res) => {
//     const contentData = await Content.create(req.body).then((content) => {
//         if (req.body)
//     })
// })

module.exports = router;
