"use client";

import { useTickets } from "../contexts/TicketContext";

export default function BuyTicket() {
  const { tickets } = useTickets();

  return (
    <div>
      <h1 className="text-2xl font-semibold">Available Tickets</h1>
      {tickets.length > 0 ? (
        <ul>
          {tickets.map((ticket) => (
            <li key={ticket.id}>{ticket.name}</li>
          ))}
        </ul>
      ) : (
        <p>No tickets available.</p>
      )}
    </div>
  );
}
