// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TicketSale {
    struct Ticket {
        uint256 id;
        string name;
        string location;
        uint256 price;
        uint256 quantity;
        bool isNegotiable;
        uint256 minOffer;
        address seller;
        bool soldOut;
    }

    struct Offer {
        address buyer;
        uint256 offerPrice;
    }

    uint256 public nextTicketId = 1;
    mapping(uint256 => Ticket) public tickets; // Ticket ID => Ticket details
    mapping(uint256 => Offer[]) public ticketOffers; // Ticket ID => Array of offers
    mapping(address => uint256[]) public userTickets; // User => Ticket IDs owned

    event TicketCreated(
        uint256 id,
        string name,
        string location,
        uint256 price,
        uint256 quantity,
        bool isNegotiable,
        address seller
    );
    event TicketBought(uint256 id, address buyer, uint256 amount);
    event OfferMade(uint256 ticketId, address buyer, uint256 offerPrice);
    event OfferAccepted(uint256 ticketId, address buyer, uint256 acceptedPrice);

    // Create a new ticket
    function createTicket(
        string memory name,
        string memory location,
        uint256 price,
        uint256 quantity,
        bool isNegotiable,
        uint256 minOffer
    ) 
    external {
        require(quantity > 0, "Quantity must be greater than zero");
        require(price > 0, "Price must be greater than zero");
        if (isNegotiable) {
            require(
                minOffer > 0 && minOffer <= price,
                "Minimum offer must be valid"
            );
        }

        tickets[nextTicketId] = Ticket({
            id: nextTicketId,
            name: name,
            location: location,
            price: price,
            quantity: quantity,
            isNegotiable: isNegotiable,
            minOffer: minOffer,
            seller: msg.sender,
            soldOut: false
        });

        emit TicketCreated(
            nextTicketId,
            name,
            location,
            price,
            quantity,
            isNegotiable,
            msg.sender
        );
        nextTicketId++;
    }

    // Buy a ticket
    function buyTicket(uint256 ticketId, uint256 quantity) external payable {
        Ticket storage ticket = tickets[ticketId];
        require(ticket.id != 0, "Ticket does not exist");
        require(!ticket.soldOut, "Ticket is sold out");
        require(ticket.quantity >= quantity, "Not enough tickets available");
        require(
            msg.value == ticket.price * quantity,
            "Incorrect payment amount"
        );

        // Transfer funds to the seller
        payable(ticket.seller).transfer(msg.value);

        // Update ticket quantity
        ticket.quantity -= quantity;
        if (ticket.quantity == 0) {
            ticket.soldOut = true;
        }

        // Record buyer ownership
        userTickets[msg.sender].push(ticketId);

        emit TicketBought(ticketId, msg.sender, msg.value);
    }

    // Make an offer for a ticket
    function makeOffer(uint256 ticketId, uint256 offerPrice) external {
        Ticket storage ticket = tickets[ticketId];
        require(ticket.id != 0, "Ticket does not exist");
        require(ticket.isNegotiable, "Ticket is not negotiable");
        require(!ticket.soldOut, "Ticket is sold out");
        require(
            offerPrice >= ticket.minOffer,
            "Offer is below minimum offer price"
        );

        ticketOffers[ticketId].push(
            Offer({buyer: msg.sender, offerPrice: offerPrice})
        );

        emit OfferMade(ticketId, msg.sender, offerPrice);
    }

    // Accept an offer
    function acceptOffer(uint256 ticketId, uint256 offerIndex) external {
        Ticket storage ticket = tickets[ticketId];
        require(ticket.id != 0, "Ticket does not exist");
        require(
            ticket.seller == msg.sender,
            "Only the seller can accept an offer"
        );

        Offer memory offer = ticketOffers[ticketId][offerIndex];
        require(offer.buyer != address(0), "Offer does not exist");

        // Transfer funds from buyer to seller
        payable(ticket.seller).transfer(offer.offerPrice);

        // Record buyer ownership
        userTickets[offer.buyer].push(ticketId);

        // Remove the accepted offer
        ticketOffers[ticketId][offerIndex] = ticketOffers[ticketId][
            ticketOffers[ticketId].length - 1
        ];
        ticketOffers[ticketId].pop();

        // Reduce ticket quantity
        ticket.quantity--;
        if (ticket.quantity == 0) {
            ticket.soldOut = true;
        }

        emit OfferAccepted(ticketId, offer.buyer, offer.offerPrice);
    }

    // Get all tickets owned by a user
    function getUserTickets(
        address user
    ) external view returns (uint256[] memory) {
        return userTickets[user];
    }

    // Get all offers for a ticket
    function getTicketOffers(
        uint256 ticketId
    ) external view returns (Offer[] memory) {
        return ticketOffers[ticketId];
    }
}
