"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const LogIn = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, seterrorMessage] = useState("");

  const log_In = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending user payload:", user);
      const response = await axios.post("/api/users/logIn", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status !== 200) {
        seterrorMessage(response.error);
      } else {
        console.log("Login successful", response.data);
        router.push("/profile");
      }
    } catch (error) {
      console.error("Login Failed", error.message);
      toast.error("Login Failed", error.message);
      seterrorMessage("Something went wrong");
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Login
        </h2>
        <form className="space-y-6" onSubmit={log_In}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="mt-1 w-full px-4 py-2 border text-gray-950 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="mt-1 w-full px-4 py-2 border text-gray-950 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-purple-600 hover:to-indigo-500 transition duration-300"
          >
            Log In
          </button>
          {/* Error message will be displayed here  */}
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </form>
        <p className="mt-6 text-sm text-gray-600 text-center">
          Don’t have an account?
          <Link
            href="/signUP"
            className="text-indigo-600 font-medium hover:underline"
          >
            Sign UP
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
