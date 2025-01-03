// app/sellTicket/page.tsx
"use client";

import { useState } from "react";
import { useTickets } from "../contexts/TicketContext";
import styles from "../styles/TicketStyles.module.css";

export default function SellTicket() {
  const { addTicket } = useTickets(); // Assuming addTicket is a function in your TicketContext
  const [ticketDetails, setTicketDetails] = useState({
    title: "",
    description: "",
    price: "",
    date: "",
    imageUrl: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTicketDetails({
      ...ticketDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTicket(ticketDetails); // Assuming this function exists in your context
    alert("Ticket added successfully!");
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.pageTitle}>Sell Your Ticket</h2>
      <form onSubmit={handleSubmit} className={styles.ticketForm}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={ticketDetails.title}
          onChange={handleChange}
          placeholder="Enter ticket title"
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={ticketDetails.description}
          onChange={handleChange}
          placeholder="Describe the event"
          required
        />

        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={ticketDetails.price}
          onChange={handleChange}
          placeholder="Enter ticket price"
          required
        />

        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={ticketDetails.date}
          onChange={handleChange}
          required
        />

        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={ticketDetails.imageUrl}
          onChange={handleChange}
          placeholder="Enter image URL (optional)"
        />

        <button type="submit" className={styles.submitButton}>
          List Ticket
        </button>
      </form>
    </div>
  );
}
