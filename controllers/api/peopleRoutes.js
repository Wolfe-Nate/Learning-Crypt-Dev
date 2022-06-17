const router = require("express").Router();
const { People } = require("../../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Get all people and JOIN with user data
    const peopleData = await People.findAll({
      include: [
        {
          model: People,
          attributes: ["name"],
        },
      ],
    });

    // Serialize data so the template can read it
    const people = peopleData.map((people) => people.get({ plain: true }));
  } catch (err) {
    res.status(500).json(err);
  }
});
