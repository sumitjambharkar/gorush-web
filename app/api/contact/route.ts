import { NextResponse } from "next/server";

// Sends contact form messages by email through Resend (https://resend.com).
// Configure RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL; see .env.example.

const TOPICS = new Set([
  "Customer support",
  "Become a courier",
  "Delivery partner support",
  "Business enquiry",
  "Technical / API support",
  "Report a safety concern",
  "Complaint",
]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (clean(body.company, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 40);
  const order = clean(body.order, 40);
  const type = clean(body.type, 60);
  const message = clean(body.message, 5000);

  if (!name || !EMAIL_RE.test(email) || !TOPICS.has(type) || !message) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("Contact form is not configured: set RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL.");
    return NextResponse.json({ error: "Messages can't be sent right now." }, { status: 503 });
  }

  const lines = [`Topic: ${type}`, `Name: ${name}`, `Email: ${email}`];
  if (phone) lines.push(`Mobile: ${phone}`);
  if (order) lines.push(`Order: ${order}`);
  const text = [...lines, "", message].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()),
      reply_to: email,
      subject: `[GoRush] ${type}: ${name}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return NextResponse.json({ error: "Messages can't be sent right now." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
