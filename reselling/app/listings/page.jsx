// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useReadContract , usePublicClient } from "wagmi";
// import { formatEther } from "viem";
// import { contractAddress, contractABI } from "@/utils/contractUtils";
// import defaultImagePath from "@/public/default-ticket.png";

// const ListingsPage = () => {
//   const [tickets, setTickets] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const publicClient = usePublicClient();

//   // Fetch total ticket count
//   const { data: ticketCount } = useReadContract ({
//     address: contractAddress,
//     abi: contractABI,
//     functionName: "ticketCount",
//     watch: true,
//   });

//   // Fetch all tickets when count changes
//   useEffect(() => {
//     const fetchTickets = async () => {
//       if (!ticketCount) return;

//       setIsLoading(true);
//       try {
//         const ticketPromises = [];

//         // Create array of ticket IDs to fetch
//         for (let i = 1; i <= Number(ticketCount); i++) {
//           ticketPromises.push(
//             publicClient.readContract({
//               address: contractAddress,
//               abi: contractABI,
//               functionName: "getTicketDetails",
//               args: [BigInt(i)],
//             })
//           );
//         }

//         // Wait for all ticket data
//         const ticketDataArray = await Promise.all(ticketPromises);

//         // Process ticket data
//         const processedTickets = ticketDataArray.map((ticketData, index) => {
//           const [
//             id,
//             seller,
//             eventDetails,
//             location,
//             price,
//             ticketsAvailable,
//             isNegotiable,
//             minOffer,
//             isSoldOut,
//             imageCID,
//             eventLink,
//             sellerEmail,
//           ] = ticketData;

//           // Parse event details
//           const [title, dateString] = eventDetails.split(" - ");
//           const eventDate = dateString
//             ? new Date(dateString).toLocaleDateString()
//             : "Date not specified";

//           return {
//             id: Number(id),
//             seller,
//             title: title || "Untitled Event",
//             location: location || "Location not specified",
//             date: eventDate,
//             price: formatEther(price),
//             image: imageCID
//               ? `https://gateway.pinata.cloud/ipfs/${imageCID}`
//               : defaultImagePath,
//             ticketsAvailable: Number(ticketsAvailable),
//             isSoldOut,
//             sellerContact: sellerEmail || "No contact provided",
//           };
//         });

//         setTickets(processedTickets.reverse());
//       } catch (error) {
//         console.error("Error fetching tickets:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchTickets();
//   }, [ticketCount, publicClient]);

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
//       </div>
//     );
//   }

//   return (
//     <main className="min-h-screen p-8 container mx-auto">
//       <h1 className="text-4xl font-bold mb-8 text-center">Available Tickets</h1>

//       {tickets.length === 0 ? (
//         <div className="text-center py-12">
//           <p className="text-xl text-gray-500 mb-4">No tickets available yet</p>
//           <Link href="/sell-tickets" className="text-blue-500 hover:underline">
//             Be the first to list a ticket!
//           </Link>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {tickets.map((ticket) => (
//             <div
//               key={ticket.id}
//               className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
//             >
//               <div className="relative h-48">
//                 <Image
//                   src={ticket.image}
//                   alt={ticket.title}
//                   fill
//                   className="object-cover"
//                   priority
//                   onError={(e) => {
//                     e.target.src = "/default-ticket.png";
//                   }}
//                 />
//               </div>

//               <div className="p-4">
//                 <h2 className="text-xl font-semibold mb-2">{ticket.title}</h2>
//                 <div className="space-y-2 mb-4">
//                   <p className="text-gray-600">📍 {ticket.location}</p>
//                   <p className="text-sm text-gray-500">🗓️ {ticket.date}</p>
//                   <p className="text-2xl font-bold text-green-600">
//                     {ticket.price} MATIC
//                   </p>
//                 </div>

//                 <div className="flex justify-between items-center mb-4">
//                   <span className="text-sm text-gray-500">
//                     🎫 Available: {ticket.ticketsAvailable}
//                   </span>
//                   <span
//                     className={`px-2 py-1 text-sm rounded ${
//                       ticket.isSoldOut
//                         ? "bg-red-100 text-red-800"
//                         : "bg-green-100 text-green-800"
//                     }`}
//                   >
//                     {ticket.isSoldOut ? "Sold Out" : "Available"}
//                   </span>
//                 </div>

//                 <Link
//                   href={`/listings/${ticket.id}`}
//                   className="block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
//                 >
//                   View Details
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </main>
//   );
// };

// export default ListingsPage;
