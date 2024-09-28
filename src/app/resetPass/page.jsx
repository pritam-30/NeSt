"use client";

import React, { useState, useRouter } from "react";
import axios from "axios";
const Page = () => {
  const router = useRouter();
  const { token, id } = router.query;
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("api/auth/resetPass", {
        id,
        password,
        token,
      });
      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Page;
