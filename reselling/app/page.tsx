import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">
        Welcome to the Ticket Reselling App
      </h1>
      <p className="text-xl mt-4">Buy and Sell Tickets using Web3</p>
      <div className="mt-8">
        <Link
          href="/listings"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          View Listings
        </Link>
      </div>
    </div>
  );
}
