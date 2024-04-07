import { NextResponse } from "next/server";
const mustache = require("mustache");
const nodemailer = require('nodemailer');
import fs from 'fs/promises';
import path from 'path';

async function getNotificationTemplate() {
  const templatePath = path.resolve('./src/templates/notification_template/notification_template.html');
  const NotificationTemplate = await fs.readFile(templatePath, 'utf8');
  return NotificationTemplate;
}

async function sendMain(subject: string, toEmail: string, email: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      pass: process.env.NEXT_PUBLIC_NODEMAILER_PW
    },
  });

  const NotificationTemplate = await getNotificationTemplate();

  const view = {
    email
  };

  const htmlToSend = mustache.render(NotificationTemplate, view);

  const mailOptions = {
    from: "rohanpoudel@rohan.com",
    to: toEmail,
    subject: subject,
    html: htmlToSend
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error: any) {
    throw new NextResponse("Something went wrong", { status: 500 });
  }
}

export async function POST(req: Request) {
  const body = await req.json();
  const { email } = body;
  try {
    const subject = "Rohan Poudel - Newsletter";
    const toEmail = process.env.NEXT_PUBLIC_EMAIL || '';
    await sendMain(subject, toEmail, email);
    return new NextResponse("Email sent successfully", { status: 200 });
  } catch (err) {
    return new NextResponse("Error sending email", { status: 500 });
  }
}