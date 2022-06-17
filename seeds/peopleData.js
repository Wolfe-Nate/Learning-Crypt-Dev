const { People } = require("../models");

const peopleData = [
  {
    id: 1,
    name: "Satoshi Nakamoto",
    description:
      "individual or group that created Bitcoin – actual identity unknown ",
  },
  {
    id: 2,
    name: "Michael Saylor",
    description:
      "American entrepreneur and cofounder of MicroStategy. By 2020, he reportedly owned nearly 18,000 Bitcoin. MicroStategy has explored purchasing Bitcoin and other alternatives to cash to represent their companys assets. ",
  },
  {
    id: 3,
    name: "Vitalik Buterin",
    description:
      "Russian-Canadian writer and programmer and cofounder of Ethereum. Involved in Bitcoin community since 2011. ",
  },
  {
    id: 4,
    name: "Jack Dorsey",
    description: "American web developer and cofounder of Twitter.",
  },
  {
    id: 5,
    name: "Nayib Bukele",
    description:
      "President of El Salvador who has been a very large and vocal supporter of cryptocurrency and even named Bitcoin as a legal tender in 2001.",
  },
  {
    id: 6,
    name: "Winklevoss Twins ",
    description:
      "brothers, Cameron and Tyler, and cofounders of HarvardConnection (now known as ConnectU). Initially famous for claiming that Mark Zuckerberg stole their idea for a social media platform. Crypto pioneers, Bitcoin billionaires, and founders of Winklevoss Capital in 2012 which has many crypto-focused investments.",
  },
  {
    id: 7,
    name: "Akon ",
    description:
      "Senegalese-American singer who has proposed to create “Akon City” in Senegal, a residential and commercial hub with its own cryptocurrency, Akoin. ",
  },
  {
    id: 8,
    name: "Laszlo Hanyecz ",
    description:
      "The first transaction of Bitcoin was by this early contributor, he traded the 10,000 bitcoin to someone for an order of two delivered Papa John's pizzas. The modern day equivalent of $200 million ",
  },
];

const seedContent = () => Content.bulkCreate(peopleData);

module.exports = seedContent;
