const router = require("express").Router();
const categoryRoutes = require("./category-routes");
const contentRoutes = require("./content-routes");
const userRoutes = require("./user-routes");
const voteRoutes = require("./vote-routes");

router.use("/users", userRoutes);
router.use("/category", categoryRoutes);
router.use("/content", contentRoutes);
router.use("/vote", voteRoutes);

// const express = require("express");

// const messageRouter = require("../../views/layout");
// const app = express();

// app.use("../ve", messageRouter);

// module.exports = app;

module.exports = router;
