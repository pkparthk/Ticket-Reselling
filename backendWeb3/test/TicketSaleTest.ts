import { ethers } from "hardhat";
import { expect } from "chai";

describe("TicketSale Contract", function () {
  let TicketSale: any;
  let ticketSale: any;
  let owner: any;
  let otherAccount: any;

  beforeEach(async function () {
    // Deploy contract before each test
    [owner, otherAccount] = await ethers.getSigners();
    TicketSale = await ethers.getContractFactory("TicketSale");
    ticketSale = await TicketSale.deploy();
    await ticketSale.deployed();
  });

  it("Should deploy the contract", async function () {
    // Assert that the contract was deployed successfully by checking the address
    expect(ticketSale.address).to.not.equal(0x0); // Check that the address is not zero
    expect(ticketSale.address).to.not.equal(""); // Check that the address is not empty string
  });

  it("Should create a new ticket", async function () {
    const ticketName = "Concert Ticket";
    const ticketLocation = "New York";
    const ticketPrice = ethers.utils.parseEther("0.1"); // Example price in Ether
    const ticketQuantity = 10;
    const isNegotiable = true;
    const minOffer = ethers.utils.parseEther("0.05");

    // Create a new ticket
    await ticketSale.createTicket(
      ticketName,
      ticketLocation,
      ticketPrice,
      ticketQuantity,
      isNegotiable,
      minOffer
    );

    // Retrieve the ticket data
    const ticket = await ticketSale.tickets(1); // Assuming this is the first ticket created
    expect(ticket.name).to.equal(ticketName);
    expect(ticket.location).to.equal(ticketLocation);
    expect(ticket.price.toString()).to.equal(ticketPrice.toString());
    expect(ticket.quantity.toString()).to.equal(ticketQuantity.toString());
  });

  it("Should allow a user to buy a ticket", async function () {
    const ticketName = "Concert Ticket";
    const ticketLocation = "New York";
    const ticketPrice = ethers.utils.parseEther("0.1"); // Example price in Ether
    const ticketQuantity = 10;
    const isNegotiable = true;
    const minOffer = ethers.utils.parseEther("0.05");

    // Create a new ticket
    await ticketSale.createTicket(
      ticketName,
      ticketLocation,
      ticketPrice,
      ticketQuantity,
      isNegotiable,
      minOffer
    );

    // Buy a ticket
    await ticketSale
      .connect(otherAccount)
      .buyTicket(1, 1, { value: ticketPrice });

    // Check that the ticket quantity was reduced
    const ticket = await ticketSale.tickets(1);
    expect(ticket.quantity.toString()).to.equal("9"); // Use toString() for correct comparison
  });
});
