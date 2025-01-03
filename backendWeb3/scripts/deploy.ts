import { ethers } from "hardhat";

async function main() {
  // Get the latest block's timestamp to use for the unlock time
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60 * 60; // unlock in 1 hour
  const lockedAmount = ethers.utils.parseEther("0.1"); // Locked amount for the contract

  // Deploy the contract
  const TicketSale = await ethers.getContractFactory("TicketSale");
  const ticketSale = await TicketSale.deploy();
  console.log("Deploying TicketSale contract...");
  await ticketSale.deployed();

  console.log("TicketSale contract deployed at:", ticketSale.address);

  // Now you can interact with the contract as needed (e.g., creating tickets)
}

// Run the script
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
