import React from "react";
import { SafeHydrate } from "./components/safeHydrate";
import { UserAuthForm } from "./components/user-auth-form";

const SellTicketsPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center py-32">
      <h1 className="text-3xl font-semibold mb-8">Post Your Event Listing</h1>
      <section className="w-96">
        <SafeHydrate> 
          <UserAuthForm />
        </SafeHydrate>
      </section>
    </div>
  );
};

export default SellTicketsPage;
