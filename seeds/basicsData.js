const { Basics } = require("../models");

const basicsData = [
  {
    id: 1,
    name: "Basics of Crypto",
    description: "Whats crypto and is it right for me?",
  },
  {
    id: 2,
    name: "Answer",
    description: "Yada yada yada",
  },
  //   {
  //     id: 3,
  //     name: "",
  //     description: "",
  //   },
];

const seedContent = () => Content.bulkCreate(basicsData);

module.exports = seedContent;
