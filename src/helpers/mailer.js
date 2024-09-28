import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
import User from "@models/userSchema";

export async function sendEmail({ email, emailType, userId }) {
  try {
    const hashedToken = await bcrypt.hash(userId.toString(), 10);
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
      Summary;

      // Looking to send emails in production? Check out our Email API/SMTP product!
      var transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.USER,
          pass: process.env.PASS,
        },
      });

      // send mail with defined transport object
      const info = {
        from: "maddison53@ethereal.email", // sender address
        to: email, // list of receivers
        subject:
          emailType === "VERIFY" ? "verify your email" : "reset your password", // Subject line
        html: `<p>Click <a href = "${
          process.env.DOMAIN
        }/verifyemail?token=${hashedToken}">here<a>
      to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
      </p>`, // html body
      };
    }
    const send = await transporter.sendMail(info);
    return send;
  } catch (error) {
    throw new Error(error.message);
  }
}
