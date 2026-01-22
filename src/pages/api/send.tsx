//API route that send the email

/// <reference types="node" /> 
//or just include node in types for tsconfig.app.json

import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { EmailTemplate } from "../../components/email/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {

  if (req.method !== "POST") {
    return res.status(405).json({error: "Method not allowed"});
  }

  const {name, email, subject, message} = req.body;

  if (!name || !email || !subject || !message){
    return res.status(400).json({error: "Missing Fields"});
  }

  try {
    await resend.emails.send({
      from: 'Enactus Contact Form <onboarding@resend.dev>', // need actual enactus domain
      to: ['sophiaperez040922@gmail.com'],
      subject: "Contact Form Submission",
      react: (
        <EmailTemplate
        name = {name}
        email = {email}
        subject = {subject}
        message = {message}
        />
      ),
    });

    return res.status(200).json({success: true});
  } catch (error) {
    console.error(error);
    return res.status(500).json({error: "Email Sending Failed"});
  }
}
