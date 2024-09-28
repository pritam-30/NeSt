import connect from "@/dbConfig/dbconfig"; // adjust the import based on your db config
import User from "@/models/userSchema"; // adjust the import based on your User model
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";

connect();

export default async function POST(req) {
  try {
    const reqBody = await req.json();
    const { token, id, password } = reqBody;
    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json({ message: "User not found" });
    }
    const validToken = await bcryptjs.compare(token, user.forgotPasswordToken);
    if (!validToken || Date.now() > user.forgotPasswordExpiry) {
      return NextResponse.json({ error: "Invalid token or token expired" });
    }
    user.password = await bcryptjs.hash(password, 10);
    user.forgotPasswordExpiry = undefined;
    user.forgotPasswordToken = undefined;
    await user.save();

    return NextResponse.json({ message: "Password reset successful" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
