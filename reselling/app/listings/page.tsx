"use client";

import { useTickets } from "../contexts/TicketContext";
import TicketCard from "../components/TicketCard";

export default function Listings() {
  const { tickets } = useTickets();

  console.log(tickets); 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {tickets.length > 0 ? (
        tickets.map((ticket) => <TicketCard key={ticket.id} ticket={ticket} />)
      ) : (
        <p>No tickets available.</p>
      )}
    </div>
  );
}
