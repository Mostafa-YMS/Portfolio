import { NextResponse } from "next/server";

type ContactFormData = {
  name: string;
  email: string;
  subject?: string;
  message: string;
  website?: string; // honeypot
};

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  return input.trim().slice(0, 1000);
}

async function verifyTurnstile(token: string | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // No protection configured

  if (!token) return false;

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret,
        response: token,
      }),
    });
    const data = await response.json();
    return data.success === true;
  } catch {
    return false;
  }
}

async function sendEmail(data: ContactFormData): Promise<boolean> {
  const to = process.env.CONTACT_FORM_TO_EMAIL;
  const from = process.env.CONTACT_FORM_FROM_EMAIL || to;

  if (!to) return false;

  // Resend
  if (process.env.RESEND_API_KEY) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to,
          subject: data.subject || `Portfolio contact from ${data.name}`,
          reply_to: data.email,
          text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
        }),
      });
      return response.ok;
    } catch {
      return false;
    }
  }

  // SendGrid
  if (process.env.SENDGRID_API_KEY) {
    try {
      const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: to }] }],
          from: { email: from },
          reply_to: { email: data.email, name: data.name },
          subject: data.subject || `Portfolio contact from ${data.name}`,
          content: [
            {
              type: "text/plain",
              value: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
            },
          ],
        }),
      });
      return response.ok;
    } catch {
      return false;
    }
  }

  // Webhook
  if (process.env.CONTACT_FORM_WEBHOOK_URL) {
    try {
      const response = await fetch(process.env.CONTACT_FORM_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });
      return response.ok;
    } catch {
      return false;
    }
  }

  return false;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot check
    if (body.website && body.website.trim()) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
    }

    const name = sanitizeInput(body.name || "");
    const email = sanitizeInput(body.email || "");
    const subject = body.subject ? sanitizeInput(body.subject) : undefined;
    const message = sanitizeInput(body.message || "");

    // Validation
    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Name must be at least 2 characters" }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }
    if (!message || message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 },
      );
    }

    // Spam protection
    const turnstileToken = body.turnstileToken || null;
    const turnstileValid = await verifyTurnstile(turnstileToken);
    if (!turnstileValid) {
      return NextResponse.json({ error: "Verification failed" }, { status: 400 });
    }

    // Send email
    const sent = await sendEmail({ name, email, subject, message });

    if (!sent) {
      return NextResponse.json(
        { error: "Message could not be sent. Please email directly." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
