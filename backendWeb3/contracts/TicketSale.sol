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
        string imageCID; // ✅ IPFS CID for event image (optional)
        string eventLink; // ✅ Optional event link
        string sellerEmail; // ✅ Required seller email
    }

    struct Offer {
        address payable buyer;
        uint256 offerPrice;
        bool isAccepted;
    }

    struct BuyerDetails {
        string buyerEmail;
        string buyerPhone;
        string nftOrImageCID; // ✅ Store the NFT or image link
    }

    uint256 public ticketCount;
    mapping(uint256 => Ticket) public tickets;
    mapping(address => uint256[]) public userTickets;
    mapping(uint256 => Offer[]) public ticketOffers;
    mapping(uint256 => BuyerDetails) public ticketBuyers; // ✅ Store buyer details

    event TicketCreated(
        uint256 id,
        address seller,
        string eventDetails,
        uint256 price,
        uint256 ticketsAvailable,
        bool isNegotiable
    );
    event OfferMade(uint256 ticketId, address buyer, uint256 offerPrice);
    event OfferAccepted(uint256 ticketId, address buyer, uint256 acceptedPrice);
    event TicketPurchased(
        uint256 id,
        address buyer,
        uint256 price,
        string buyerEmail,
        string buyerPhone,
        string nftOrImageCID
    );

    // ✅ Create a new ticket
    function createTicket(
        string memory _eventDetails,
        string memory _location,
        uint256 _price,
        uint256 _ticketsAvailable,
        bool _isNegotiable,
        uint256 _minOffer,
        string memory _sellerEmail, // Required seller email
        string memory _imageCID, // Optional event image IPFS CID
        string memory _eventLink // Optional event link
    ) public {
        require(_price > 0, "Price must be greater than zero");
        require(_ticketsAvailable > 0, "Tickets available must be greater than zero");
        require(bytes(_sellerEmail).length > 0, "Seller email is required");

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
            isSoldOut: false,
            imageCID: _imageCID,
            eventLink: _eventLink,
            sellerEmail: _sellerEmail
        });

        emit TicketCreated(ticketCount, msg.sender, _eventDetails, _price, _ticketsAvailable, _isNegotiable);
    }

    // ✅ Buy a ticket (stores buyer details)
    function buyTicket(
        uint256 _ticketId,
        string memory _buyerEmail,
        string memory _buyerPhone,
        string memory _nftOrImageCID
    ) public payable nonReentrant {
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

        // ✅ Store buyer details
        ticketBuyers[_ticketId] = BuyerDetails({
            buyerEmail: _buyerEmail,
            buyerPhone: _buyerPhone,
            nftOrImageCID: _nftOrImageCID
        });

        emit TicketPurchased(_ticketId, msg.sender, ticket.price, _buyerEmail, _buyerPhone, _nftOrImageCID);
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
        bool isSoldOut,
        string memory imageCID,
        string memory eventLink,
        string memory sellerEmail
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
            ticket.isSoldOut,
            ticket.imageCID,
            ticket.eventLink,
            ticket.sellerEmail
        );
    }

    // ✅ Get all ticket details
function getAllTickets() public view returns (Ticket[] memory) {
    Ticket[] memory result = new Ticket[](ticketCount);
    for (uint256 i = 0; i < ticketCount; i++) {
        result[i] = tickets[i + 1]; // ticket IDs start from 1
    }
    return result;
}




    // ✅ Retrieve buyer details
    function getBuyerDetails(uint256 _ticketId) public view returns (
        string memory buyerEmail,
        string memory buyerPhone,
        string memory nftOrImageCID
    ) {
        BuyerDetails storage buyer = ticketBuyers[_ticketId];
        return (buyer.buyerEmail, buyer.buyerPhone, buyer.nftOrImageCID);
    }
}
