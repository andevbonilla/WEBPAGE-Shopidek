import { NextResponse } from "next/server";
import { TEAM_EMAIL } from "@/app/config";

const MAX_FIELD_LENGTH = 5000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SupportPayload = {
  name?: unknown;
  email?: unknown;
  storeDomain?: unknown;
  app?: unknown;
  subject?: unknown;
  message?: unknown;
  honeypot?: unknown;
};

function asText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function asSingleLine(value: unknown) {
  return asText(value).replace(/[\r\n]+/g, " ");
}

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

export async function POST(request: Request) {
  let payload: SupportPayload;

  try {
    const body: unknown = await request.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) return badRequest("Invalid request body.");
    payload = body as SupportPayload;
  } catch {
    return badRequest("Invalid request body.");
  }

  // Quietly accept honeypot submissions so automated senders do not learn
  // whether the form rejected them.
  if (asText(payload.honeypot)) {
    return NextResponse.json({ ok: true });
  }

  const name = asSingleLine(payload.name);
  const email = asSingleLine(payload.email);
  const storeDomain = asSingleLine(payload.storeDomain);
  const app = asSingleLine(payload.app) || "general";
  const subject = asSingleLine(payload.subject);
  const message = asText(payload.message);

  if (name.length < 2 || name.length > 120) return badRequest("Please enter a valid name.");
  if (!EMAIL_PATTERN.test(email) || email.length > 254) return badRequest("Please enter a valid email address.");
  if (storeDomain.length < 3 || storeDomain.length > 255) return badRequest("Please enter your Shopify store domain.");
  if (subject.length < 4 || subject.length > 180) return badRequest("Please enter a valid subject.");
  if (message.length < 10 || message.length > MAX_FIELD_LENGTH) return badRequest("Please enter a message between 10 and 5,000 characters.");

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error("Support form is missing RESEND_API_KEY.");
    return NextResponse.json({ error: "Support email is not configured yet. Please try again later." }, { status: 503 });
  }

  const text = [
    "New ShopiDeck support request",
    "",
    `Name: ${name}`,
    `Reply-to: ${email}`,
    `Shopify store domain: ${storeDomain}`,
    `Product: ${app}`,
    `Subject: ${subject}`,
    "",
    "Question:",
    message,
    "",
    "Reminder: do not reply with API keys, passwords, access tokens, or full customer lists.",
  ].join("\n");

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: TEAM_EMAIL,
      to: [TEAM_EMAIL],
      reply_to: email,
      subject: `[ShopiDeck Support] ${subject}`,
      text,
    }),
  });

  if (!resendResponse.ok) {
    const errorBody = await resendResponse.text();
    console.error("Resend support email failed", resendResponse.status, errorBody);
    return NextResponse.json({ error: "We could not send your request. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
