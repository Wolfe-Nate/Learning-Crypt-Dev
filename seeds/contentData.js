const { Content } = require("../models");

const contentData = [
  {
    article_url:
      "https://www.coindesk.com/business/2022/06/10/jack-dorseys-tbd-announces-web-3-competitor-web5/",
    title: "web5 article",
    user_id: 1,
  },
  {
    article_url:
      "https://www.fidelity.com/learning-center/trading-investing/markets-sectors/understandingbitcoin-replay",
    title: "bitcoin article",
    user_id: 2,
  },
  {
    article_url:
      "https://decrypt.co/100915/ethereum-merge-coming-august-everything-plan-core-dev",
    title: "eth article",
    user_id: 3,
  },
];

const seedContent = () => Content.bulkCreate(contentData);

module.exports = seedContent;
