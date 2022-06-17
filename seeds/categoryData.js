const { Category } = require("../models");

const categoryData = [
  {
    id: 1,
    description:
      "Interesting article about a new potential replacement for the internet as we know it.",
    bitcoin_focus: true,
    eth_focus: false,
    alt_coin: false,
    crypto_tech: false,
    content_id: 1,
  },
  {
    id: 2,
    description:
      "Cool to see large financial firm put out a strong report in favor of bitcoin",
    bitcoin_focus: true,
    eth_focus: false,
    alt_coin: false,
    crypto_tech: false,
    content_id: 2,
  },
  {
    id: 3,
    description:
      "Check out the latest update on when the eth merge might take place",
    bitcoin_focus: true,
    eth_focus: false,
    alt_coin: false,
    crypto_tech: false,
    content_id: 3,
  },
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;
