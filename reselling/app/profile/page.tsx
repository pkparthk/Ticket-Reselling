"use client";

import React, { useState, useEffect } from "react";
import { useUser } from "../contexts/UserContext";

export default function ProfilePage() {
  const { user, updateUser } = useUser();
  const [profileDetails, setProfileDetails] = useState({
    name: user?.name || "",
    email: user?.email || "",
    profileImage: user?.profileImage || "",
  });

  useEffect(() => {
    if (user) {
      setProfileDetails({
        name: user.name,
        email: user.email,
        profileImage: user.profileImage,
      });
    }
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfileDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser(profileDetails);
  };

  if (!user)
    return <p className="text-center mt-10 text-gray-600">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
        Profile
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Section */}
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            Edit Profile
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={profileDetails.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-color"
            />
            <input
              type="email"
              name="email"
              value={profileDetails.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-color"
            />
            <textarea
              name="profileImage"
              value={profileDetails.profileImage}
              onChange={handleChange}
              placeholder="Profile Image URL"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-color"
            />
            <button
              type="submit"
              className="w-full p-3 bg-primary-color text-white font-semibold rounded-lg hover:bg-accent-color transition duration-300"
            >
              Save Changes
            </button>
          </form>
        </div>

        {/* Orders Section */}
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            Your Orders
          </h2>
          {user?.orders?.length ? (
            <div className="space-y-3">
              {user.orders.map((order, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg shadow bg-white"
                >
                  <h3 className="text-lg font-medium text-gray-800">
                    {order.title}
                  </h3>
                  <p className="text-sm text-gray-600">Date: {order.date}</p>
                  <p className="text-sm text-gray-600">Price: ${order.price}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No orders found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
