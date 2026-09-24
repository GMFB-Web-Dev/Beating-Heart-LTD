import { Resend } from "resend";

export const runtime = "nodejs";

const services = new Set([
  "Residential Cleaning",
  "Commercial Cleaning",
  "Airbnb Cleaning",
  "General Enquiry",
]);

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  service?: unknown;
  message?: unknown;
  terms?: unknown;
  company?: unknown;
};

function cleanText(value: unknown, maximumLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maximumLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };

    return entities[character];
  });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");

  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ message: "Invalid request origin." }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 20_000) {
    return Response.json({ message: "Request is too large." }, { status: 413 });
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ message: "Invalid request." }, { status: 400 });
  }

  const honeypot = cleanText(payload.company, 200);
  if (honeypot) {
    return Response.json({ success: true });
  }

  const name = cleanText(payload.name, 100);
  const email = cleanText(payload.email, 254).toLowerCase();
  const service = cleanText(payload.service, 80);
  const message = cleanText(payload.message, 5_000);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    name.length < 2 ||
    !emailPattern.test(email) ||
    !services.has(service) ||
    message.length < 10 ||
    payload.terms !== true
  ) {
    return Response.json({ message: "Please check the form details and try again." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_FORM_TO_EMAIL?.trim();
  const from = "BeatingHeart Website <enquiries@weblaunch.co.nz>";

  if (!apiKey || !to) {
    console.error("Contact form email configuration is incomplete.");
    return Response.json({ message: "Contact form is temporarily unavailable." }, { status: 503 });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeService = escapeHtml(service);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send(
      {
        from,
        to: [to],
        replyTo: email,
        subject: `New BeatingHeart enquiry — ${service}`,
        text: `New website enquiry\n\nName: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family:Arial,sans-serif;color:#101828;line-height:1.6">
            <h1 style="font-size:24px;margin:0 0 20px">New website enquiry</h1>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Service:</strong> ${safeService}</p>
            <p><strong>Message:</strong><br />${safeMessage}</p>
          </div>
        `,
      },
      { idempotencyKey: `beatingheart-contact/${crypto.randomUUID()}` },
    );

    if (error) {
      console.error("Resend contact form error:", error.name, error.message);
      return Response.json({ message: "Unable to send enquiry." }, { status: 502 });
    }
  } catch (error) {
    console.error("Unexpected contact form email error:", error instanceof Error ? error.message : "Unknown error");
    return Response.json({ message: "Unable to send enquiry." }, { status: 502 });
  }

  return Response.json({ success: true });
}
