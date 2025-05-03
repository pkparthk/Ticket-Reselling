"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAccount, usePublicClient } from "wagmi";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { uploadFileToIPFS } from "@/utils/pinataUtils";
import { useCreateTicket, toWei } from "@/utils/contractUtils";
import defaultTicketImage from "@/public/default-ticket.png";

export function UserAuthForm({ className, ...props }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [eventImage, setEventImage] = useState(null);
  const [imageCID, setImageCID] = useState("");
  const { address } = useAccount();
  const router = useRouter();
  const publicClient = usePublicClient();

  const { create, isPending: isContractLoading, error } = useCreateTicket();

  const [formData, setFormData] = useState({
    email: "",
    title: "",
    description: "",
    locationCity: "",
    locationState: "",
    locationCountry: "",
    price: "",
    date: "",
    eventLink: "",
    isNegotiable: false,
    minOffer: "",
    quantity: "1",
  });

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isMounted) return;
    setIsLoading(true);

    try {
      if (!address) throw new Error("Please connect your wallet!");

      // Validate required fields
      const requiredFields = [
        "email",
        "title",
        "date",
        "locationCity",
        "locationCountry",
        "price",
        "quantity",
      ];

      const missingFields = requiredFields.filter(
        (field) => !formData[field]?.trim()
      );

      if (missingFields.length > 0) {
        throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
      }

      // Process values
      const priceWei = toWei(formData.price);
      const quantity = BigInt(formData.quantity);
      const minOffer = formData.isNegotiable
        ? toWei(formData.minOffer)
        : BigInt(0);

      // Handle image upload
      let finalImageCID = imageCID;
      if (eventImage) {
        if (eventImage.size > 2 * 1024 * 1024) {
          throw new Error("Image size should be less than 2MB");
        }
        finalImageCID = await uploadFileToIPFS(eventImage);
        setImageCID(finalImageCID);
      }

      // Prepare contract params
      const ticketParams = {
        eventDetails: `${formData.title} - ${formData.date}`,
        location: [
          formData.locationCity,
          formData.locationState,
          formData.locationCountry,
        ]
          .filter(Boolean)
          .join(", "),
        price: priceWei,
        ticketsAvailable: quantity,
        isNegotiable: formData.isNegotiable,
        minOffer: minOffer,
        sellerEmail: formData.email,
        imageCID: finalImageCID || defaultTicketImage,
        eventLink: formData.eventLink || "",
      };

      // Execute contract call
      const txResult = await create(ticketParams);

      if (txResult?.hash) {
        alert("Transaction submitted! Check your wallet for confirmation...");

        // Wait for 2 confirmations
        const receipt = await publicClient.waitForTransactionReceipt({
          hash: txResult.hash,
          confirmations: 2,
        });

        alert("🎉 Ticket listed successfully!");
        router.push("/search");
      }
    } catch (err) {
      console.error("Transaction Error:", err);
      alert(
        err.message.includes("reverted")
          ? "❌ Transaction failed: Please check your inputs"
          : `❌ Error: ${err.message}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div
      className={cn("grid gap-6", className)}
      data-mounted={isMounted}
      {...props}
    >
      <form onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1 mb-4">
            <Label>Contact Email</Label>
            <Input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading || isContractLoading}
            />

            <Label>Event Title</Label>
            <Input
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              disabled={isLoading || isContractLoading}
            />

            <Label>Event Description (Optional)</Label>
            <Input
              name="description"
              value={formData.description}
              onChange={handleChange}
              disabled={isLoading || isContractLoading}
            />

            <Label>Event Date</Label>
            <Input
              name="date"
              type="date"
              required
              value={formData.date}
              onChange={handleChange}
              disabled={isLoading || isContractLoading}
            />

            <Label>Event Link (Optional)</Label>
            <Input
              name="eventLink"
              type="url"
              placeholder="https://example.com"
              value={formData.eventLink}
              onChange={handleChange}
              disabled={isLoading || isContractLoading}
            />

            <Label>City</Label>
            <Input
              name="locationCity"
              required
              value={formData.locationCity}
              onChange={handleChange}
              disabled={isLoading || isContractLoading}
            />

            <Label>State</Label>
            <Input
              name="locationState"
              value={formData.locationState}
              onChange={handleChange}
              disabled={isLoading || isContractLoading}
            />

            <Label>Country</Label>
            <Input
              name="locationCountry"
              required
              value={formData.locationCountry}
              onChange={handleChange}
              disabled={isLoading || isContractLoading}
            />

            <Label>Price (ETH)</Label>
            <Input
              name="price"
              type="number"
              min="0.000001"
              step="0.000001"
              required
              value={formData.price}
              onChange={handleChange}
              disabled={isLoading}
            />

            <Label>Quantity Available</Label>
            <Input
              name="quantity"
              type="number"
              min="1"
              required
              value={formData.quantity}
              onChange={handleChange}
              disabled={isLoading || isContractLoading}
            />

            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                name="isNegotiable"
                checked={formData.isNegotiable}
                onChange={handleChange}
                disabled={isLoading || isContractLoading}
              />
              <Label>Allow Price Negotiation</Label>
            </div>

            {formData.isNegotiable && (
              <>
                <Label>Minimum Offer (ETH)</Label>
                <Input
                  name="minOffer"
                  type="number"
                  min="0.000001"
                  step="0.000001"
                  required
                  value={formData.minOffer}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </>
            )}

            <Label>Event Image (Optional)</Label>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setEventImage(e.target.files?.[0] || null)}
              disabled={isLoading || isContractLoading}
            />
            {imageCID && (
              <p className="text-sm text-green-600">Image uploaded!</p>
            )}

            <Button
              type="submit"
              disabled={
                !isMounted || isLoading || isContractLoading || !address
              }
              className="mt-4"
            >
              {(isLoading || isContractLoading) && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              {!isMounted ? "Initializing..." : "List Tickets"}
            </Button>

            {error && (
              <p className="text-red-500 text-sm mt-2">
                Error: {error.shortMessage || error.message}
              </p>
            )}

            {/* Wallet status with consistent rendering */}
            {/* <p
              className={`text-sm mt-2 ${
                isMounted && address ? "text-green-500" : "text-red-500"
              }`}
            >
              {walletStatus}
            </p> */}
          </div>
        </div>
      </form>
    </div>
  );
}
