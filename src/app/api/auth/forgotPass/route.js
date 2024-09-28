import connect from "@/dbConfig/dbconfig";
import nodemailer from "nodemailer";
import User from "@/models/userSchema";
import { v4 as uuidv4 } from "uuid";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connect();
    const reqBody = await req.json();
    const { email } = reqBody;

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }
    const token = uuidv4();
    const hashedToken = await bcryptjs.hash(token, 10);

    user.forgotPasswordToken = hashedToken;
    user.forgotPasswordTokenExpiry = Date.now() + 36000000;
    await user.save();

    //setUp nodemailer
    // Looking to send emails in production? Check out our Email API/SMTP product!
    var transport = nodemailer.createTransport({
      host: "sandbox.mailtrap.io",
      port: 2525,
      auth: {
        user: "5fe60a8a51c2e1",
        pass: "042aaa2e828f9c",
      },
    });

    const reset = `${process.env.DOMAIN}/resetPass?token=${token}&id=${user._id}`;
    await transport.sendMail({
      from: "coder30@gmail.com",
      to: email,
      subject: "Password Reset",
      html: `<p>Click <a href="${reset}">here</a> to reset your password.</p>`,
    });
    return NextResponse.json(
      { message: "Reset password email sent" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
