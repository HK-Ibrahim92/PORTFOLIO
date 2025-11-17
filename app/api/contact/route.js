import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// re_eC6Nu9jB_4TKzodY86GHErPXhYG6TvybZ

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // 1️⃣ SEND EMAIL TO YOU
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.MAIL_TO,
      subject: `📩 New Message From ${name}`,
      html: `
        <h2 style="font-size:18px;">New Portfolio Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // 2️⃣ AUTO-REPLY EMAIL TO THE USER
    await resend.emails.send({
      from: "Ibrahim Ahmed <onboarding@resend.dev>",
      to: email,
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family:Arial; padding:20px;">
          <h2 style="color:#6d28d9;">Hey ${name},</h2>
          <p>Thank you for reaching out! I have received your message and will get back to you soon.</p>

          <p style="margin-top:18px;">Here’s a quick summary of what you sent:</p>
          <blockquote style="
            border-left: 4px solid #6d28d9;
            padding-left: 10px;
            color:#444;
            margin-top:10px;
          ">
            ${message}
          </blockquote>

          <p style="margin-top:20px;">Best Regards,<br/> <strong>Ibrahim Ahmed</strong></p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.log("Email Error:", error);
    return Response.json(
      { error: "Failed to send emails" },
      { status: 500 }
    );
  }
}
