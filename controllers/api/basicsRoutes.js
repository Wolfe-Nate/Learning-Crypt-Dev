const router = require("express").Router();
// const { Basics } = require("../models");
const withAuth = require("../utils/auth");

const basicsData = [
  {
    id: 1,
    name: "Basics of Crypto",
    description: "What is crypto and is it right for me?",
  },
  {
    id: 2,
    name: "Answer",
    description:
      "A cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend. Many cryptocurrencies are decentralized networks based on blockchain technology—a distributed ledger enforced by a disparate network of computers. A defining feature of cryptocurrencies is that they are generally not issued by any central authority, rendering them theoretically immune to government interference or manipulation",
  },
  {
    id: 3,
    name: "PROS",
    description:
      "The advantages of cryptocurrencies include cheaper and faster money transfers and decentralized systems that do not collapse at a single point of failure.",
  },
  {
    id: 4,
    name: "CONS",
    description:
      "The disadvantages of cryptocurrencies include their price volatility, high energy consumption for mining activities, and use in criminal activities.",
  },
];

router.get("/", async (req, res) => {
  try {
    res.render("all");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
