"use server";

import { SMTPClient } from "emailjs";
import { emailType } from "./type";

const client = new SMTPClient({
  user: process.env.EMAIL_USER,
  password: process.env.EMAIL_PASSWORD,
  host: "smtp.gmail.com",
  ssl: true,
});

const sendEmail = async ({ name, email, msg }: emailType) => {
  try {
    await client.sendAsync({
      text: msg,
      from: "vincentcan909@gmail.com",
      to: "vincentcan909@gmail.com",
      subject: "From Portofolio Web",
      attachment: [
        {
          data: `<html>
            <p>from: ${name}</p>
            <p>email: ${email}</p>
            <p>${msg}</p>
          </html>`,
          alternative: true,
        },
      ],
    });
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;
