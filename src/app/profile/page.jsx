"use client";
import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";
const ProfilePage = () => {
  const router = useRouter();
  const handleLogout = async () => {
    // ! Implement your logout logic here, e.g., calling an API to log out
    try {
      //alert("Logging out...");
      await axios.get("/api/users/logOut");
      router.push("/logIn");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Profile</h1>
        <div className="flex items-center mb-4">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="rounded-full border border-gray-300"
          />
          <div className="ml-4">
            <h2 className="text-xl font-bold text-gray-700">John Doe</h2>
            <p className="text-gray-500">johndoe@example.com</p>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">About Me</h3>
          <p className="text-gray-600">Welcome Developers</p>
        </div>

        <div className="flex justify-center">
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
