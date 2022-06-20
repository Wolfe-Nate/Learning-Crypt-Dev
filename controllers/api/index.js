const router = require("express").Router();

const contentRoutes = require("./contentRoutes");
const userRoutes = require("./userRoutes");

router.use("/users", userRoutes);

router.use("/content", contentRoutes);

module.exports = router;
