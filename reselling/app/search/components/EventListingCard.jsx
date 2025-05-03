// components/EventListingCard.jsx
"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

export function EventListingCard({
  id,
  seller,
  price,
  title,
  city,
  state,
  date,
}) {
  const formatDate = (timestamp) => {
    try {
      return new Date(Number(timestamp) * 1000).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return "Date TBD";
    }
  };

  const formatPrice = (wei) => {
    try {
      return (Number(wei) / 1e18).toFixed(2);
    } catch {
      return "0.00";
    }
  };

  return (
    <Link href={`/listings/${id}`} className="group/card block">
      <div
        className={cn(
          "h-96 rounded-lg shadow-lg overflow-hidden relative transition-transform duration-300 group-hover/card:scale-105",
          "bg-cover bg-center bg-gray-100",
          "border border-gray-200"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="relative h-full flex flex-col justify-between p-6">
          <div className="flex justify-between items-start">
            <div className="text-gray-200">
              <p className="font-medium truncate">{seller}</p>
              <p className="text-sm opacity-80">{formatDate(date)}</p>
            </div>
            <span className="bg-black/30 px-3 py-1 rounded-full text-white text-sm">
              Ξ{formatPrice(price)}
            </span>
          </div>

          <div className="text-white">
            <h3 className="text-2xl font-bold mb-2 truncate">{title}</h3>
            <p className="opacity-90">
              {city}, {state}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

EventListingCard.propTypes = {
  id: PropTypes.string.isRequired,
  seller: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
};
