const path = require("path");
const fs = require("fs-extra");
const solc = require("solc");

const contractPath = path.resolve(__dirname, "../contracts/TicketSale.sol");
const sourceCode = fs.readFileSync(contractPath, "utf8");

const input = {
  language: "Solidity",
  sources: {
    "TicketSale.sol": {
      content: sourceCode,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

// Error handling
if (output.errors) {
  output.errors.forEach((error) => {
    console.error(error.formattedMessage);
  });
  process.exit(1);
}

// Save artifacts
const contract = output.contracts["TicketSale.sol"]["TicketSale"];
const artifactsPath = path.resolve(__dirname, "../artifacts/TicketSale.json");

fs.outputJsonSync(artifactsPath, {
  abi: contract.abi,
  bytecode: contract.evm.bytecode.object,
});

module.exports = {
  abi: contract.abi,
  bytecode: contract.evm.bytecode.object,
};
