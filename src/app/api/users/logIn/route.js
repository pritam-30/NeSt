import connect from "@/dbConfig/dbconfig";
import User from "@/models/userSchema";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    // Ensure connection to the database
    await connect();

    const reqBody = await req.json();
    const { email, password } = reqBody;

    // Validate email and password
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 400 }
      );
    }

    // Validate password
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 400 }
      );
    }

    // Create token data
    const token_data = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    // Generate JWT token
    const token = jwt.sign(token_data, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    // Prepare response with token in cookies
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
      status: 200,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Set secure only in production
      sameSite: "strict",
    });

    return response;
  } catch (error) {
    console.error("An error occurred during login:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
