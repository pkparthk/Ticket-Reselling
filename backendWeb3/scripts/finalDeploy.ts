const { ethers } = require("hardhat");
import dotenv from "dotenv";

dotenv.config();

async function main() {
  try {
    const AMOY_URL = process.env.AMOY_URL;
    const PRIVATE_KEY = process.env.PRIVATE_KEY;

    if (!AMOY_URL || !PRIVATE_KEY) {
      throw new Error("Missing environment variables: AMOY_URL or PRIVATE_KEY");
    }

    const provider = new ethers.providers.JsonRpcProvider(AMOY_URL);
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

    // Fetch the current gas price
    const gasPrice = await provider.getGasPrice();
    console.log("Current gas price:", gasPrice.toString());

    console.log("Deploying TicketSale contract...");

    // Deploy with a custom gas fee (add 10 Gwei to the base gas price)
    const TicketSale = await ethers.getContractFactory("TicketSale", wallet);
    const ticketSale = await TicketSale.deploy({
      gasPrice: gasPrice.add(ethers.utils.parseUnits("10", "gwei")), // Add buffer to current gas price
      gasLimit: 5000000, // Set a manual gas limit
    });

    await ticketSale.deployed();
    console.log("TicketSale contract deployed at:", ticketSale.address);
  } catch (error) {
    console.error("Deployment failed:", error);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("Error:", error);
  process.exitCode = 1;
});

// Current gas price: 50000000000
// Deploying TicketSale contract...
// TicketSale contract deployed at: 0xf1C0fd4952c2470A76Db601f9c53Ed277ba230BE