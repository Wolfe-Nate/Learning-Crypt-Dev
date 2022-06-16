const router = require("express").Router();
module.exports = router;

const express = require("express");

const messageRouter = require("");
const app = express();

app.use("../ve", messageRouter);

module.exports = app;
