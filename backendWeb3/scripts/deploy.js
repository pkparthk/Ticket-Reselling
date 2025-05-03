require("dotenv").config();
const { ethers } = require("hardhat");
const fs = require("fs-extra");
const path = require("path");

async function main() {
  // 1. Get deployer account and network info
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying with account: ${deployer.address}`);

  // 2. Check account balance first
  const balance = await deployer.getBalance();
  console.log(`Account balance: ${ethers.utils.formatEther(balance)} ETH`);

  // 3. Calculate gas parameters
  const gasPrice = await ethers.provider.getGasPrice();
  const gasPriceGwei = ethers.utils.formatUnits(gasPrice, "gwei");
  console.log(`Current network gas price: ${gasPriceGwei} gwei`);

  // 4. Get contract factory and estimate gas
  const TicketSale = await ethers.getContractFactory("TicketSale");
  const deploymentData = TicketSale.getDeployTransaction();

  // 5. Estimate gas with buffer
  let estimatedGas = await ethers.provider.estimateGas(deploymentData);
  estimatedGas = estimatedGas.mul(120).div(100); // Add 20% buffer
  console.log(`Estimated gas (with buffer): ${estimatedGas.toString()}`);

  // 6. Calculate total deployment cost
  const deploymentCost = estimatedGas.mul(gasPrice);
  console.log(
    `Estimated deployment cost: ${ethers.utils.formatEther(deploymentCost)} ETH`
  );

  // 7. Check if balance is sufficient
  if (balance.lt(deploymentCost)) {
    const needed = ethers.utils.formatEther(deploymentCost.sub(balance));
    throw new Error(
      `Insufficient funds! Add ${needed} ETH more to your account\n` +
        `Sepolia faucets:\n` +
        `- https://sepoliafaucet.com/\n` +
        `- https://faucet.quicknode.com/ethereum/sepolia`
    );
  }

  // 8. Deploy the contract
  console.log("Deploying TicketSale contract...");
  const ticketSale = await TicketSale.deploy({
    gasPrice: gasPrice,
    gasLimit: estimatedGas,
  });

  // 9. Wait for deployment confirmation
  await ticketSale.deployed();
  console.log(`TicketSale deployed to: ${ticketSale.address}`);

  // 10. Update config file
  const configPath = path.join(__dirname, "../config.json");
  const config = await fs.readJson(configPath);

  config.contractAddress = ticketSale.address;
  config.network = "sepolia";
  config.deployer = deployer.address;
  config.deployedAt = new Date().toISOString();

  await fs.writeJson(configPath, config, { spaces: 2 });
  console.log("Configuration updated successfully");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("\n⚠️ Deployment failed:", error.message);
    process.exit(1);
  });



// Account balance: 0.091387132865865885 ETH
// Current network gas price: 15.644247781 gwei
// Estimated gas (with buffer): 1790218
// Estimated deployment cost: 0.028006613974006258 ETH
// Deploying TicketSale contract...
// TicketSale deployed to: 0xb0C1004C3B7176319AC45b0BaD5FC0BD57c995B1
// Configuration updated successfully