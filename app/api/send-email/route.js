import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/rate-limit';

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (str) =>
  String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));

const stripControlChars = (str) => String(str).replace(/[\r\n\t\x00-\x1f\x7f]/g, " ").trim();

function validate(body) {
  const { firstname, lastname, email, phone, service, message } = body || {};

  if (typeof firstname !== "string" || !firstname.trim() || firstname.length > 100) return false;
  if (typeof lastname !== "string" || !lastname.trim() || lastname.length > 100) return false;
  if (typeof email !== "string" || email.length > 200 || !EMAIL_RE.test(email)) return false;
  if (typeof message !== "string" || !message.trim() || message.length > 5000) return false;
  if (phone !== undefined && phone !== "" && (typeof phone !== "string" || phone.length > 40)) return false;
  if (service !== undefined && service !== "" && (typeof service !== "string" || service.length > 200)) return false;

  return true;
}

export async function POST(req) {
  const body = await req.json().catch(() => null);
  if (!body || !validate(body)) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const { allowed } = await checkRateLimit(`ratelimit:send-email:${ip}`, 5, 600);
  if (!allowed) {
    return NextResponse.json({ error: "Too many requests, please try again later" }, { status: 429 });
  }

  const firstname = stripControlChars(body.firstname);
  const lastname = stripControlChars(body.lastname);
  const email = stripControlChars(body.email);
  const phone = stripControlChars(body.phone || "");
  const service = stripControlChars(body.service || "");
  const message = body.message.trim();

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['coding.maikel@gmail.com'],
      subject: `New Contact Form Submission from ${firstname} ${lastname}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(firstname)} ${escapeHtml(lastname)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Service:</strong> ${escapeHtml(service)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("send-email failed:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
