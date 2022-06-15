const express = require("express");

const messageRouter = require("../../views/layout");
const app = express();

app.use("../ve", messageRouter);

module.exports = app;
