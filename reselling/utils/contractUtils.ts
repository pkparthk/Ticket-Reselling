import { useReadContract, useWriteContract, useAccount } from "wagmi";
import { parseEther, formatEther, Address } from "viem";
import { polygonAmoy, sepolia } from "wagmi/chains";
import contractAbi from "./TicketSale.json";

// Type definitions matching the smart contract
interface TicketParams {
  eventDetails: string;
  location: string;
  price: bigint;
  ticketsAvailable: bigint;
  isNegotiable: boolean;
  minOffer: bigint;
  sellerEmail: string;
  imageCID: string;
  eventLink: string;
}

interface BuyTicketParams {
  ticketId: number;
  buyerEmail: string;
  buyerPhone: string;
  nftOrImageCID: string;
  value: bigint;
}

// Smart Contract Details
export const contractAddress: Address = process.env.NEXT_CONTRACT_ADDRESS as Address; 
export const contractABI = contractAbi.abi;

// Create Ticket Hook
export function useCreateTicket() {
  const { writeContract, ...rest } = useWriteContract();

  const create = async (params: TicketParams) => {
    console.log("Creating ticket with params:", params); // Debugging log
    try {
      const result = await writeContract({
        address: contractAddress,
        abi: contractABI,
        functionName: "createTicket",
        args: [
          params.eventDetails,
          params.location,
          params.price,
          params.ticketsAvailable,
          params.isNegotiable,
          params.isNegotiable ? params.minOffer : BigInt(0), // Ensure minOffer is 0 if not negotiable
          params.sellerEmail,
          params.imageCID,
          params.eventLink,
        ],
        chainId: sepolia.id,
        gas: BigInt(500000), // Increased gas limit
      });
      console.log("Transaction successful:", result); // Log transaction result
      return result;
    } catch (error) {
      console.error("Error creating ticket:", error); // Log error details
      throw error;
    }
  };

  return { create, ...rest };
}

// Buy Ticket Hook
export function useBuyTicket() {
  const { address } = useAccount();
  const { writeContract, ...rest } = useWriteContract();

  const buy = (params: BuyTicketParams) => {
    return writeContract({
      address: contractAddress,
      abi: contractABI,
      functionName: "buyTicket",
      args: [
        BigInt(params.ticketId),
        params.buyerEmail,
        params.buyerPhone,
        params.nftOrImageCID,
      ],
      value: params.value,
      account: address,
      chainId: sepolia.id,
    });
  };

  return { buy, ...rest };
}

// Read Hooks
export const useGetTicketDetails = (ticketId: number) => {
  return useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "getTicketDetails",
    args: [BigInt(ticketId)],
    query: { enabled: !!ticketId },
  });
};

export const useGetAllTickets = () => {
  return useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "ticketCount",
  });
};

export const useGetBuyerDetails = (ticketId: number) => {
  return useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "getBuyerDetails",
    args: [BigInt(ticketId)],
    query: { enabled: !!ticketId },
  });
};
export const useGetAllTicketDetails = () => {
  const result = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "getAllTickets",
  });

  if (!result || !result.data) {
    console.error("Error fetching tickets: Invalid data or connection.");
    return { data: [], error: "Invalid data or connection." };
  }

  const parsedData = Array.isArray(result.data)
    ? result.data.map((ticket) => ({
        id: Number(ticket.id),
        seller: ticket.seller,
        eventDetails: ticket.eventDetails,
        location: ticket.location,
        price: BigInt(ticket.price),
        ticketsAvailable: Number(ticket.ticketsAvailable),
        isNegotiable: ticket.isNegotiable,
        minOffer: BigInt(ticket.minOffer),
        isSoldOut: ticket.isSoldOut,
        imageCID: ticket.imageCID,
        eventLink: ticket.eventLink,
        sellerEmail: ticket.sellerEmail,
      }))
    : [];

  return {
    ...result,
    data: parsedData,
  };
};

// Conversion utilities
export const toWei = parseEther;
export const fromWei = formatEther;
