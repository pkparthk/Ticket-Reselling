"use client";
import { useState, useEffect } from "react";
import { useGetAllTicketDetails } from "@/utils/contractUtils";
import { EventListingCard } from "./components/EventListingCard";
import SearchQueryResults from "./components/SearchQueryResults";

const SearchPage = () => {
  const { data: tickets, isLoading, error } = useGetAllTicketDetails();

  const [searchCriteria, setSearchCriteria] = useState({
    eventName: "",
    location: "",
    date: "",
  });
  const [filteredTickets, setFilteredTickets] = useState([]);

  useEffect(() => {
    if (tickets && Array.isArray(tickets)) {
      // Only update state if the tickets have changed
      setFilteredTickets((prevTickets) => {
        if (JSON.stringify(prevTickets) !== JSON.stringify(tickets)) {
          return tickets;
        }
        return prevTickets;
      });

      // Log success message if tickets are fetched successfully
      if (tickets.length > 0) {
        console.log("Tickets fetched successfully and ready for search.");
      }
    }
  }, [tickets]);

  const handleSearch = () => {
    if (!tickets || !Array.isArray(tickets)) return;

    const filteredResults = tickets.filter((ticket) => {
      const matchesTitle = ticket.eventDetails
        ?.toLowerCase()
        .includes(searchCriteria.eventName.toLowerCase());

      const matchesLocation = ticket.location
        ?.toLowerCase()
        .includes(searchCriteria.location.toLowerCase());

      const matchesDate = searchCriteria.date
        ? ticket.eventDetails
            ?.toLowerCase()
            .includes(searchCriteria.date.toLowerCase())
        : true;

      return matchesTitle && matchesLocation && matchesDate;
    });

    console.log("Filtered results:", filteredResults);
    setFilteredTickets(filteredResults);
  };

  return (
    <div className="flex min-h-screen flex-col items-center py-32">
      <main className="md:w-[720px] lg:w-[860px] xl:w-[920px] 2xl:w-[1200px]">
        <section className="w-full border-b-2 pb-8">
          <SearchQueryResults
            searchCriteria={searchCriteria}
            setSearchCriteria={setSearchCriteria}
            onSearch={handleSearch}
          />
        </section>

        <section>
          {isLoading ? (
            <div className="flex items-center justify-center mt-64 text-muted-foreground">
              Loading events...
            </div>
          ) : error ? (
            <div className="flex items-center justify-center mt-16 text-red-500">
              Error loading tickets
            </div>
          ) : filteredTickets.length > 0 ? (
            <div className="p-6 grid md:grid-cols-2 2xl:grid-cols-3 gap-3">
              {filteredTickets.map((ticket, index) => (
                <div key={index} className="border p-4 rounded shadow">
                  <h2 className="text-lg font-semibold">
                    {ticket.eventDetails}
                  </h2>
                  <p>
                    <strong>Location:</strong> {ticket.location}
                  </p>
                  <p>
                    <strong>Price:</strong> {ticket.price.toString()} wei
                  </p>
                  <p>
                    <strong>Available:</strong> {ticket.ticketsAvailable}
                  </p>
                  {ticket.imageCID && (
                    <img
                      src={`https://gateway.pinata.cloud/ipfs/${ticket.imageCID}`}
                      alt="Ticket"
                      className="w-full mt-2"
                    />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center mt-16 text-muted-foreground">
              No matching tickets found
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default SearchPage;
