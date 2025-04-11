"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

export default function ProfilePage() {
  const [data, setData] = React.useState(null);
  const [userName, setUserName] = useState(null);

  const getUserDetails = async () => {
    const response = await axios.get("/api/users/meuser");
    console.log(response.data);
    setData(response.data.data._id);
    setUserName(response.data.data.username);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="bg-gray-800 shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Profile Page</h1>
        <p className="text-gray-300 mb-6">This is the profile page.</p>
        <h2 className="text-lg font-medium text-blue-400 mb-4">
          {data === null ? (
            "Nothing"
          ) : (
            <Link
              href={`/profile/${data}`}
              className="underline hover:text-blue-300"
            >
              View {userName}&apos;s Profile
            </Link>
          )}
        </h2>
        <button
          onClick={getUserDetails}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
        >
          Get User Details
        </button>
      </div>
    </div>
  );
}
