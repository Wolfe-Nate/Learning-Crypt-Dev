const router = require("express").Router();
module.exports = router;

const express = require("express");

const messageRouter = require("../../views/layout");
const app = express();

app.use("../ve", messageRouter);

module.exports = app;
