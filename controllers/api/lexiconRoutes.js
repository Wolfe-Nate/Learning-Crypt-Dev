const router = require("express").Router();
const { Lexicon } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Get all lexicon words and JOIN with user data
    const lexiconData = await People.findAll({
      include: [
        {
          model: Lexicon,
          attributes: ["name"],
        },
      ],
    });

    // Serialize data so the template can read it
    const lexicon = lexiconData.map((lexicon) => lexicon.get({ plain: true }));
  } catch (err) {
    res.status(500).json(err);
  }
});
