import connect from "@/dbConfig/dbconfig";
import User from "@/models/userSchema";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { username, email, password } = reqBody;
    // Check if the user already exists
    const user = await User.findOne({ email: reqBody.email });
    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);
    // Create a new user
    const newUser = new User({ username, email, password: hashedPassword });
    // Save the new user
    await newUser.save();

    return NextResponse.json({
      message: "user created successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
