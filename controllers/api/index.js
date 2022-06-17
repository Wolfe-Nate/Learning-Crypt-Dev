const router = require("express").Router();
const categoryRoutes = require("./category-routes");
const contentRoutes = require("./content-routes");
const userRoutes = require("./user-routes");
const voteRoutes = require("./vote-routes");

router.use("/users", userRoutes);
router.use("/category", categoryRoutes);
router.use("/content", contentRoutes);
router.use("/vote", voteRoutes);

module.exports = router;
