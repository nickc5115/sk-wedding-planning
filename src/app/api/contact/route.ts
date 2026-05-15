import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";

type Payload = {
  name?: string;
  email?: string;
  date?: string;
  location?: string;
  message?: string;
  website?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return Response.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  // Honeypot. Return 200 to not tip off bots, but skip sending.
  if (body.website && body.website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  const missing: string[] = [];
  if (!name) missing.push("your name");
  if (!email) missing.push("your email");
  if (!message) missing.push("a short message");
  if (missing.length > 0) {
    const list =
      missing.length === 1
        ? missing[0]
        : missing.slice(0, -1).join(", ") + " and " + missing[missing.length - 1];
    return Response.json(
      { ok: false, error: `Please add ${list}.` },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json(
      { ok: false, error: "That email address doesn't look right." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { ok: false, error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const date = body.date?.trim() || "(not provided)";
  const location = body.location?.trim() || "(not provided)";

  const text = [
    `New inquiry from ${name} <${email}>`,
    ``,
    `Wedding date: ${date}`,
    `Location: ${location}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  const { error } = await resend.emails.send({
    from: siteConfig.fromAddress,
    to: siteConfig.email,
    replyTo: email,
    subject: `New inquiry from ${name}`,
    text,
  });

  if (error) {
    return Response.json(
      { ok: false, error: "Something went wrong sending your note." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
