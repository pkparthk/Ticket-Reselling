require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
      mining: {
        auto: true,
        interval: 0,
      },
    },
    sepolia: {
      url: process.env.INFURA_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 11155111,
      gasLimit: 8000000,
      gas: 8000000,
      allowUnlimitedContractSize: true,
      timeout: 60000,
    },
  },
  paths: {
    artifacts: "./artifacts",
    tests: "./test",
  },
  mocha: {
    timeout: 40000,
  },
};
