const router = require("express").Router();
const { User, Content, Category } = require("../models");
const withAuth = require("../utils/auth");

// // TODO: Add a comment describing the functionality of the withAuth middleware
// router.get("/", withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ["password"] },
//       order: [["name", "ASC"]],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render("homepage", {
//       users,
//       // TODO: Add a comment describing the functionality of this property
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/login", (req, res) => {
//   // TODO: Add a comment describing the functionality of this if statement
//   if (req.session.logged_in) {
//     res.redirect("/");
//     return;
//   }

//   res.render("login");
// });

// GET for all learning articles for homepage
router.get("/", async (req, res) => {
  try {
    const contentData = await Content.findAll({
      include: [
        {
          model: Category,
        },
      ],
    });

    const contents = contentData.map((content) => content.get({ plain: true }));

    res.render("homepage", {
      contents,
      // loggiedIn: req.session.loggedIn,
    });
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
