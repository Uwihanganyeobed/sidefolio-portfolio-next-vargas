"use client";
import React, { useEffect, useState } from "react";

export interface UsersResponse {
  success: boolean;
  data: User[];
  totalPages: number;
  currentPage: number;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: "User" | "Admin" | "Manager" | string;
  wishlist: (string | null)[];
  avatar: string;
  isEmailVerified: boolean;
  verificationToken?: string;
  verificationTokenExpires?: string;
  status: string;
  preferences: Preferences;
  addresses: Address[]; // If you know the address structure, replace "any" with a specific type
  createdAt: string;
  updatedAt: string;
  __v: number;
  lastLogin?: string;
  resetPasswordExpire?: string;
  resetPasswordToken?: string;
}

export interface Preferences {
  newsletter: boolean;
  notifications: boolean;
}

// If you have address structure, define it here. For now, it's an empty array in your data.
export type Address = any;

export default function Home() {
  const [user, setUser] = useState<UsersResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // NETWORK REQUESTS

  // This file contains the network requests for the application.

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/users")
        .then((response) => response.json())
        .then((item) => {
          setUser(item);
          setLoading(false);
          setError(null);
          console.log("items fetched successfully:", item);
        })
        .catch((error) => {
          setLoading(true);
          setError(error);
          console.error("Error fetching item:", error);
        });
      return response;
    };

    fetchData();
    // This function fetches data from the API and returns it as a JSON object
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>User Details</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div>
          {user && (
            <div>
              {user.data.map((one, id) => (
                <div key={one._id}>
                  <p>{one._id}</p>
                </div>
              ))}
            </div>
          )}
      </div>
    </div>
  );
}
