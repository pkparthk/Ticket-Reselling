"use client"; 

import React, { createContext, useContext, useState, ReactNode } from "react";

interface TicketDetails {
  title: string;
  description: string;
  price: string;
  date: string;
}

interface TicketContextType {
  tickets: TicketDetails[];
  addTicket: (ticket: TicketDetails) => void;
}

const TicketContext = createContext<TicketContextType | undefined>(undefined);

export const TicketProvider = ({ children }: { children: ReactNode }) => {
  const [tickets, setTickets] = useState<TicketDetails[]>([]);

  const addTicket = (ticket: TicketDetails) => {
    setTickets((prevTickets) => [...prevTickets, ticket]);
  };

  return (
    <TicketContext.Provider value={{ tickets, addTicket }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTickets = () => {
  const context = useContext(TicketContext);
  if (!context) {
    throw new Error("useTickets must be used within a TicketProvider");
  }
  return context;
};
