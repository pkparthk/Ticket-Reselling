const { ethers } = require("ethers");
import dotenv from "dotenv";

dotenv.config();

async function main() {
  const AMOY_URL = process.env.AMOY_URL;
  const PRIVATE_KEY = process.env.PRIVATE_KEY;

  const provider = new ethers.providers.JsonRpcProvider(AMOY_URL);
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

  const ticketSaleAddress = "0x02587F25618C28bd4dF475E7937aB5758C393Af2"; // Replace with actual deployed address
  const TicketSale = await ethers.getContractFactory("TicketSale", wallet);
  const ticketSale = TicketSale.attach(ticketSaleAddress);

  // Example: Call a function from the contract
  const ticketsOwned = await ticketSale.getUserTickets(wallet.address);
  console.log("Tickets owned by the user:", ticketsOwned);
}

main().catch((error) => {
  console.error("Error interacting with contract:", error);
  process.exit(1);
});
