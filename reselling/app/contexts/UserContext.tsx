"use client"; // Add this directive

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define your User interface
interface User {
  name: string;
  email: string;
  profileImage: string;
}

interface UserContextProps {
  user: User | null;
  updateUser: (updatedUser: User) => void;
}

// Create the UserContext with default value
const UserContext = createContext<UserContextProps | undefined>(undefined);

// Create the provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Function to update user information
  const updateUser = (updatedUser: User) => {
    setUser(updatedUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
