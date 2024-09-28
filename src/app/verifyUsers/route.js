import connect from "@dbConfig/dbconfig.js";
import { NextResponse } from "next/server";
import User from "@models/userSchema";

// Ensure database is connected
connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { token } = reqBody;

    // Find user with the token and verifyTokenExpiry greater than current time
    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    // If no user found or token expired
    if (!user) {
      return NextResponse.json(
        { error: "Token not found or expired" },
        { status: 400 }
      );
    }
    console.log(user);
    // Update user to set isVerified to true and clear verification token
    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;
    await user.save();

    return NextResponse.json({
      message: "Email verified successfully",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
