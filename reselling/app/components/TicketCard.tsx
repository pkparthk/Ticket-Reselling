// TicketCard.tsx
import React from "react";
import styles from "../styles/TicketStyles.module.css";

interface Ticket {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface TicketCardProps {
  ticket: Ticket;
  onBuy: (ticketId: string) => void;
}

const TicketCard: React.FC<TicketCardProps> = ({ ticket, onBuy }) => {
  return (
    <div className={styles["ticket-card"]}>
      <div className={styles["ticket-card-header"]}>{ticket.name}</div>
      <div className={styles["ticket-card-description"]}>
        {ticket.description}
      </div>
      <div className={styles["ticket-card-footer"]}>
        <span className={styles["ticket-price"]}>${ticket.price}</span>
        <button
          className={styles["ticket-button"]}
          onClick={() => onBuy(ticket.id)}
        >
          Buy Ticket
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
