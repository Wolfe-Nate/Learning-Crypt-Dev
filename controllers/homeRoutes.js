const router = require("express").Router();
const { User, Content } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const contentData = await Content.findAll();
    //   {
    //   include: [
    //     {
    //       model: Category,
    //     },
    //   ],
    // }

    const contents = contentData.map((content) => content.get({ plain: true }));

    res.render("homepage", {
      contents,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/content/:id", withAuth, async (req, res) => {
  try {
    const dbContentData = await Content.findByPk(
      req.params.id
      //   {
      //   include: [
      //     {
      //       model: Category,
      //       attributes: ["description"],
      //     },
      //   ],
      // }
    );

    const content = dbContentData.get({ plain: true });
    res.render("content", { content, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
