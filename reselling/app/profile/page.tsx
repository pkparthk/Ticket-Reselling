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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  if (!user) return <p className="text-center mt-10 text-gray-600">Loading...</p>;

  return (
    <div className="max-w-lg mx-auto mt-12 bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Edit Profile</h1>
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
  );
}
