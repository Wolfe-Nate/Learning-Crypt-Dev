const { Lexicon } = require("../models");

const lexiconData = [
  {
    id: 1,
    name: "Address",
    description:
      "place where cryptocurrency can be sent to and from, in the form of a string of numbers and letters.",
  },
  {
    id: 2,
    name: "ATH",
    description:
      "acronym – All-Time-High = “the highest price-point that a crypto currency has been.",
  },
  {
    id: 3,
    name: "AltCoin",
    description:
      "Bitcoin was the first cryptocurrency that gained popularity, and any subsequent coins were termed “altcoins,” as in “alternative coins.",
  },
  {
    id: 4,
    name: "Bear Market",
    description:
      "when prices of assets in a market fall by 20% or more from recent high.",
  },
  {
    id: 5,
    name: "Bull Market",
    description:
      "time during which the prices of assets grow dramatically. This type of market can act as a source of motivation for both investors and purchasers.",
  },
  {
    id: 6,
    name: "Block",
    description:
      "file containing information on transactions completed during a given time period. Blocks are the constituent parts of a blockchain.",
  },
  {
    id: 7,
    name: "Blockchain",
    description:
      "sequence of blocks, or units of digital information, stored consecutively in a public database. The basis for cryptocurrencies.",
  },
  {
    id: 8,
    name: "Bitcoin",
    description: "First and best-recognized type of cryptocurrency.",
  },
  {
    id: 9,
    name: "Circulating Supply",
    description:
      "estimation of the number of coins that are circulating in the market and among the general public. ",
  },
  {
    id: 10,
    name: "Cold Storage",
    description:
      "offline storage of cryptocurrencies, typically involving hardware non-custodial wallets, USBs, offline computers, or paper wallets.",
  },
  {
    id: 11,
    name: "Cryptocurrency",
    description:
      "digital currencies that use cryptographic technologies to secure their operation ",
  },
  {
    id: 12,
    name: "DeFi",
    description:
      "a movement encouraging alternatives to traditional, centralized forms of financial services",
  },
  {
    id: 13,
    name: "DYOR",
    description:
      "acronym – 'Do Your Own Research' – encouraging investors to complete due diligence into a project before investing",
  },
  {
    id: 14,
    name: "ELI5",
    description:
      "acronym – 'explain like I’m five' – request for simplicity when crypto concepts are being explained ",
  },
  {
    id: 15,
    name: "Ethereum ",
    description:
      "decentralized blockchain platform that establishes a peer-to-peer network that securely executes and verifies application code, called smart contracts",
  },
  {
    id: 16,
    name: "Fiat Money ",
    description:
      "'legal tender' backed by a central government (e.g. Federal Reserve) that has its own banking system, such as fractional reserve banking. Can be physical cash or represented electronically.",
  },
  {
    id: 17,
    name: "FOMO",
    description:
      "acronym – fear of missing out; as opposed to its opposite (antonym), JOMO (the joy of missing out) ",
  },
  {
    id: 18,
    name: "FUD",
    description:
      "acronym – Fear, Uncertainty, and Doubt – utilized to sway perception of the crypto market by spreading inaccurate information to mislead the general public. ",
  },
  {
    id: 19,
    name: "Halving",
    description: "event in which the total rewards per confirmed block halves ",
  },
  {
    id: 20,
    name: "Hash",
    description:
      "the output result of a hashing algorithm, which creates a unique, fixed-length string to encrypt and secure a certain selection of data",
  },
  {
    id: 21,
    name: "HODL",
    description:
      "acronym – Hold On For Dear Life - type of passive investment strategy where you hold an investment for a long period of time, regardless of any changes in the price or markets. ",
  },
  {
    id: 22,
    name: "ICO",
    description:
      "acronym –  Initial Coin Offering –  type of crowdfunding  using cryptocurrencies as a means of raising capital. ",
  },
  {
    id: 23,
    name: "KYC",
    description:
      "acronym –  Know Your Customer (acronym) – these are checks that crypto exchanges and trading platforms must complete to verify the identity of their customers. ",
  },
  {
    id: 24,
    name: "Ledger",
    description:
      "a record of financial transactions that cannot be changed, only appended with new transactions. ",
  },
  {
    id: 25,
    name: "Mining",
    description:
      "competitive process that verifies and adds new transactions to the blockchain for a cryptocurrency that uses the proof-of-work (PoW) method",
  },
  {
    id: 26,
    name: "NFT",
    description:
      "acronym – non-Fungible Token – cryptocurrencies that cannot can be traded or exchanged for one another. Generaly built using same kind of programming as cryptocurrencies like Bitcoin or Ethereum. ",
  },
  {
    id: 27,
    name: "Node",
    description:
      "most basic unit of blockchain infrastructure that stores data.",
  },
  {
    id: 28,
    name: "P2P",
    description:
      "acronym – Peer-to-Peer – decentralized interactions between parties in a distributed network, partitioning tasks or workloads between peers. ",
  },
  {
    id: 29,
    name: "Private Key",
    description:
      "piece of code generated in asymmetric-key encryption process, paired with a public key, to be used in encrypting information hashed with the public key ",
  },
  {
    id: 30,
    name: "Public Key",
    description:
      "series of alphanumeric characters used to encrypt plain text messages into ciphertext. ",
  },
  {
    id: 31,
    name: "Pump and Dump Scheme (P&D) ",
    description:
      "form of fraud involving the artificial inflation of the price of a cryptocurrency with false and misleading positive statements",
  },
  {
    id: 32,
    name: "Proof of Stake",
    description:
      "blockchain consensus mechanism in addition to Proof-of-Work that maintains the integrity of blockchain ",
  },
  {
    id: 33,
    name: "Proof of Work",
    description:
      "blockchain consensus mechanism involving solving of computationally intensive puzzles to validate transactions and create new blocks ",
  },
  {
    id: 34,
    name: "REKT",
    description: "shorthand describing a bad trading loss: 'wrecked' ",
  },
  {
    id: 35,
    name: "Smart Contract",
    description:
      "computer protocol intended to facilitate, verify or enforced a contract on the blockchain without third parties.",
  },
  {
    id: 36,
    name: "Token",
    description:
      "a digital unit designed with utility in mind, providing access and use of a larger crypto economic system",
  },
  {
    id: 37,
    name: "Volatility",
    description:
      "statistical measure of dispersion of returns, measured by using the standard deviation or variance between returns from that same security or market index. ",
  },
  {
    id: 38,
    name: "Wallet",
    description:
      "a place where cryptocurrency users can store, send and receive digital assets.",
  },
  {
    id: 39,
    name: "Whale",
    description:
      "term used to describe investors who have uncommonly large amounts of crypto, especially those with enough funds to manipulate the market.",
  },
  {
    id: 40,
    name: "Wen Lambo",
    description:
      "phrase referring to when cryptocurrency holders will become rich enough to afford the purchase of a Lamborghini.",
  },
  {
    id: 41,
    name: "Wen Moon",
    description:
      "phrase used to ask when the price of cryptocurrencies will have extreme upward movement.",
  },
  {
    id: 42,
    name: "White Papers",
    description:
      "document released by a crypto project that gives investors technical information about its concept, and a roadmap for how it plans to grow and succeed.",
  },
];

const seedContent = () => Content.bulkCreate(lexiconData);

module.exports = seedContent;
