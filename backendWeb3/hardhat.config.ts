require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const AMOY_URL = process.env.AMOY_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.27",
  networks: {
    polygon: {
      url: AMOY_URL,
      accounts: [PRIVATE_KEY], // Ensure that this is properly set in .env
    },
  },
};
