"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export const Page = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("/api/users/signUP", user);
      router.push("/logIn");
      console.log(response.data);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="username"
              id="username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border text-gray-950 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your username"
              required
            />
          </div>
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
              className="mt-1 block w-full px-3 py-2 border text-gray-950 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="mt-1 block w-full text-gray-950 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <Link href="/logIn" className="text-indigo-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
