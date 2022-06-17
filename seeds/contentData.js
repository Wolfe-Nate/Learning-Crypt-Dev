const { Content } = require("../models");

const contentData = [
  {
    id: 1,
    article_url:
      "https://www.coindesk.com/business/2022/06/10/jack-dorseys-tbd-announces-web-3-competitor-web5/",
    user_id: 1,
  },
  {
    id: 2,
    article_url:
      "https://www.fidelity.com/learning-center/trading-investing/markets-sectors/understandingbitcoin-replay",
    user_id: 2,
  },
  {
    id: 3,
    article_url:
      "https://decrypt.co/100915/ethereum-merge-coming-august-everything-plan-core-dev",
    user_id: 3,
  },
];

const seedContent = () => Content.bulkCreate(contentData);

module.exports = seedContent;
