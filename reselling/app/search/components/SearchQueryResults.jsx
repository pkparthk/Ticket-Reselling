// components/SearchQueryResults.jsx
"use client";
import React from "react";

const SearchQueryResults = ({
  searchCriteria,
  setSearchCriteria,
  onSearch,
}) => {
  const handleInputChange = (field) => (e) => {
    setSearchCriteria((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid md:grid-cols-3 gap-4 w-full max-w-4xl">
        <input
          type="text"
          value={searchCriteria.eventName}
          onChange={handleInputChange("eventName")}
          placeholder="Search events..."
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={searchCriteria.location}
          onChange={handleInputChange("location")}
          placeholder="Location (City, State)"
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          value={searchCriteria.date}
          onChange={handleInputChange("date")}
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        onClick={onSearch}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Search Events
      </button>
    </div>
  );
};

export default SearchQueryResults;
