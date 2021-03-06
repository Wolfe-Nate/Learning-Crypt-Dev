const router = require("express").Router();
//const categoryRoutes = require("./category-routes");
const contentRoutes = require("./contentRoutes");
const userRoutes = require("./userRoutes");
//const voteRoutes = require("./vote-routes");
// const basicsRoutes = require("./basics-routes");
// const lexiconRoutes = require("./lexicon-routes");
// const peopleRoutes = require("./people-routes");

router.use("/users", userRoutes);
//router.use("/category", categoryRoutes);
router.use("/content", contentRoutes);
//router.use("/vote", voteRoutes);
// router.use("./basics", basicsRoutes);
// router.use("./lexicon", lexiconRoutes);
// router.use("./people", peopleRoutes);

module.exports = router;
