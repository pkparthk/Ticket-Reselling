// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract TicketSale is ReentrancyGuard {
    struct Ticket {
        uint256 id;
        address payable seller;
        string eventDetails;
        string location;
        uint256 price;
        uint256 ticketsAvailable;
        bool isNegotiable;
        uint256 minOffer;
        bool isSoldOut;
    }

    struct Offer {
        address payable buyer;
        uint256 offerPrice;
        bool isAccepted;
    }

    uint256 public ticketCount;
    mapping(uint256 => Ticket) public tickets;
    mapping(address => uint256[]) public userTickets;
    mapping(uint256 => Offer[]) public ticketOffers;

    event TicketCreated(uint256 id, address seller, string eventDetails, uint256 price, uint256 ticketsAvailable, bool isNegotiable);
    event OfferMade(uint256 ticketId, address buyer, uint256 offerPrice);
    event OfferAccepted(uint256 ticketId, address buyer, uint256 acceptedPrice);
    event TicketPurchased(uint256 id, address buyer, uint256 price);

    // ✅ Create a new ticket
    function createTicket(
        string memory _eventDetails,
        string memory _location,
        uint256 _price,
        uint256 _ticketsAvailable,
        bool _isNegotiable,
        uint256 _minOffer
    ) public {
        require(_price > 0, "Price must be greater than zero");
        require(_ticketsAvailable > 0, "Tickets available must be greater than zero");

        ticketCount++;
        tickets[ticketCount] = Ticket({
            id: ticketCount,
            seller: payable(msg.sender),
            eventDetails: _eventDetails,
            location: _location,
            price: _price,
            ticketsAvailable: _ticketsAvailable,
            isNegotiable: _isNegotiable,
            minOffer: _isNegotiable ? _minOffer : 0,
            isSoldOut: false
        });

        emit TicketCreated(ticketCount, msg.sender, _eventDetails, _price, _ticketsAvailable, _isNegotiable);
    }

    // ✅ Make an offer for a ticket
    function makeOffer(uint256 _ticketId) public payable {
        Ticket storage ticket = tickets[_ticketId];
        require(ticket.id != 0, "Ticket does not exist");
        require(ticket.isNegotiable, "Ticket is not negotiable");
        require(ticket.ticketsAvailable > 0, "Ticket is sold out");
        require(msg.value >= ticket.minOffer, "Offer price is below the minimum allowed");

        ticketOffers[_ticketId].push(Offer({
            buyer: payable(msg.sender),
            offerPrice: msg.value,
            isAccepted: false
        }));

        emit OfferMade(_ticketId, msg.sender, msg.value);
    }

    // ✅ Accept an offer
    function acceptOffer(uint256 _ticketId, uint256 _offerIndex) public nonReentrant {
        Ticket storage ticket = tickets[_ticketId];
        require(ticket.seller == msg.sender, "Only the seller can accept offers");
        require(_offerIndex < ticketOffers[_ticketId].length, "Invalid offer index");

        Offer storage offer = ticketOffers[_ticketId][_offerIndex];
        require(!offer.isAccepted, "Offer already accepted");

        // Mark offer as accepted
        offer.isAccepted = true;

        // Transfer funds to the seller
        ticket.seller.transfer(offer.offerPrice);

        // Transfer ticket ownership
        userTickets[offer.buyer].push(ticket.id);
        ticket.ticketsAvailable--;

        if (ticket.ticketsAvailable == 0) {
            ticket.isSoldOut = true;
        }

        emit OfferAccepted(_ticketId, offer.buyer, offer.offerPrice);
    }

    // ✅ Buy a ticket instantly (non-negotiable)
    function buyTicket(uint256 _ticketId) public payable nonReentrant {
        Ticket storage ticket = tickets[_ticketId];
        require(ticket.id != 0, "Ticket does not exist");
        require(ticket.ticketsAvailable > 0, "No tickets available");
        require(!ticket.isNegotiable, "Ticket is negotiable, use makeOffer");
        require(msg.value == ticket.price, "Incorrect price");
        require(msg.sender != ticket.seller, "You cannot buy your own ticket");

        ticket.seller.transfer(msg.value);
        ticket.ticketsAvailable--;

        if (ticket.ticketsAvailable == 0) {
            ticket.isSoldOut = true;
        }

        userTickets[msg.sender].push(ticket.id);

        emit TicketPurchased(_ticketId, msg.sender, ticket.price);
    }

    // ✅ Retrieve ticket details
    function getTicketDetails(uint256 _ticketId) public view returns (
        uint256 id,
        address seller,
        string memory eventDetails,
        string memory location,
        uint256 price,
        uint256 ticketsAvailable,
        bool isNegotiable,
        uint256 minOffer,
        bool isSoldOut
    ) {
        Ticket storage ticket = tickets[_ticketId];
        require(ticket.id != 0, "Ticket does not exist");

        return (
            ticket.id,
            ticket.seller,
            ticket.eventDetails,
            ticket.location,
            ticket.price,
            ticket.ticketsAvailable,
            ticket.isNegotiable,
            ticket.minOffer,
            ticket.isSoldOut
        );
    }

    // ✅ Retrieve all active tickets
    function getAllTickets() public view returns (Ticket[] memory) {
        uint256 availableTicketCount = 0;
        for (uint256 i = 1; i <= ticketCount; i++) {
            if (!tickets[i].isSoldOut) {
                availableTicketCount++;
            }
        }

        Ticket[] memory allTickets = new Ticket[](availableTicketCount);
        uint256 index = 0;

        for (uint256 i = 1; i <= ticketCount; i++) {
            if (!tickets[i].isSoldOut) {
                allTickets[index] = tickets[i];
                index++;
            }
        }
        return allTickets;
    }

    // ✅ Retrieve user-owned tickets
    function getUserTickets(address user) public view returns (uint256[] memory) {
        return userTickets[user];
    }
}
