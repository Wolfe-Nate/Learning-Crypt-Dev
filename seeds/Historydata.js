const { History } = require("../models");

const Historydata = [
  {
    id: 1,
    title: "History of Cryptos",
    description:
      "Cryptos were created as a man made form of decentralized currency utilizing blockchain technology, the transactions are peer-to-peer and authenticated. The history we provide will be focused on Bitcoin. ",
    history:
      "The first introduction of Bitcoin as know it was in 2008. The creator Satoshi Nakamota, is an anonymous entity that authored the white papers or fundamentals of Bitcoin and implemented the first blockchain database within. During the time of 2008-2010 Bitcoin was not used for any transactions. The mining was done by Nakamota and other early contributors during this time. The first transaction of Bitcoin was by early contributor, Laszlo Hanyecz, he traded the 10,000 bitcoin to someone for an order of two delivered Papa John's pizzas. The modern day equivalent of $200 million, for some zas'. From there Bitcoin was primarily used on websites such as Silk Road, an exchange for nearly any type of product. In 2013 we see some of the first regulations of Bitcoin, The Peoples Republic of China, prohibits their banks for using. From 2010-2016 Bitcoin received various amounts of setbacks and successes, scams were fairly common due to a lack of knowledge for new investors, Bitcoin finally making headline news and being featured in Tv Shows. The Mt. Gox incident of 2014 is notable, Mt. Gox was the largest exchange for Bitcoin at the time, storing around 850,000 bitcoins, it abruptly ceased operation because the theft and lose of majority of the coins on the exchange. It is thought that majority were stolen. Alt Coins(LiteCoin, Ripple, ETH) during this time had a similar run of Bitcoin, they mostly base their foundation on a similar platform as Bitcoin, providing an alternative to Bitcoin as itself(Bitcoin) turns more to a store-value asset, compared to a transactional process. From 2015 on, until our current year of 2022, Bitcoin had broken its ATH(All-time-high) yearly and never dropped below its year to date low. From being nearly valueless, 1 Bitcoin has reached a high of $69,044.77, and fluctuated significantly following its ATH. We now are at a stage where Bitcoin is breaking its patterns, causing a lot of unrest within the community as we look for the next direction of this innovative and useful technology. In the writers opinion this is good for Bitcoin as we need to really look at why we use Bitcoin, and read the criticism that is coming out of breaking the pattern, to know and fix the weaknesses of Bitcoin and provide a brighter stronger future for our use of money.",
  },
];

const seedHistory = () => History.bulkCreate(Historydata);

module.exports = seedHistory;
