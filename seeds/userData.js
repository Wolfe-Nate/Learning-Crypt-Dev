const { User } = require("../models");

const userData = [
  {
    id: 1,
    name: "Sal",
    email: "sal@hotmail.com",
    password: "password12345",
  },
  {
    id: 2,
    name: "Lernantino",
    email: "lernantino@gmail.com",
    password: "password12345",
  },
  {
    id: 3,
    name: "Amiko",
    email: "amiko2k20@aol.com",
    password: "password12345",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
