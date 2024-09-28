"use client";

import React from "react";
import { useState } from "react";
import axios from "axios";

const Page = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("api/auth/forgotPass");
      const data = res.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Forgot Password?
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Enter your email below, and we’ll send you a reset link.
        </p>

        {message && (
          <div className="mb-4 p-3 bg-green-100 text-green-800 rounded text-center">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border text-black border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="/logIn" className="text-sm text-blue-500 hover:underline">
            Back to login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
