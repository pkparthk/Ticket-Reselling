// app/search/page.jsx
"use client";
import { useState, useEffect } from "react";
import { useReadContract } from "wagmi";
import { contractAddress, contractABI } from "@/utils/contractUtils";
import { EventListingCard } from "./components/EventListingCard";
import SearchQueryResults from "./components/SearchQueryResults";

const SearchPage = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    eventName: "",
    location: "",
    date: "",
  });
  const [filteredTickets, setFilteredTickets] = useState([]);

  const {
    data: tickets,
    isLoading,
    isError,
  } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "getAllTickets",
  });

  useEffect(() => {
    if (tickets) {
      setFilteredTickets(tickets);
    }
  }, [tickets]);

  const handleSearch = () => {
    if (!tickets) return;

    const filteredResults = tickets.filter((ticket) => {
      const matchesTitle = ticket.title
        .toLowerCase()
        .includes(searchCriteria.eventName.toLowerCase());

      const matchesLocation = `${ticket.city}, ${ticket.state}`
        .toLowerCase()
        .includes(searchCriteria.location.toLowerCase());

      const matchesDate = searchCriteria.date
        ? new Date(Number(ticket.date) * 1000).toISOString().split("T")[0] ===
          searchCriteria.date
        : true;

      return matchesTitle && matchesLocation && matchesDate;
    });

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
          ) : isError ? (
            <div className="flex items-center justify-center mt-16 text-red-500">
              Error loading tickets
            </div>
          ) : filteredTickets.length > 0 ? (
            <div className="p-6 grid md:grid-cols-2 2xl:grid-cols-3 gap-3">
              {filteredTickets.map((ticket) => (
                <EventListingCard
                  key={ticket.id.toString()}
                  id={ticket.id.toString()}
                  seller={ticket.seller}
                  title={ticket.title}
                  date={ticket.date.toString()}
                  city={ticket.city}
                  state={ticket.state}
                  price={ticket.price.toString()}
                />
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
