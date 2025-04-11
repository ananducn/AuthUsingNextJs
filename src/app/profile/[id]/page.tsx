"use client";
import axios from "axios";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function UserProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();

  const logout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      console.log("Logout successful", response.data);
      toast.success("Logout successful");

      // Clear user data from local storage or state management
      // cookies().delete("token");

      // Redirect to login page
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />

      {/* Header */}
      <header className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
        <h1 className="text-2xl font-semibold">User Profile</h1>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </header>

      {/* Profile Content */}
      <div className="text-lg">
        Welcome, <span className="text-green-400 font-bold">{id}</span>
      </div>
    </div>
  );
}
