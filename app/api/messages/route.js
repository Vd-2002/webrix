import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { getAuthUser } from "@/lib/auth";
import nodemailer from "nodemailer";

async function sendEmails(newMessage) {
  const { name, email, company, category, message } = newMessage;
  
  const host = process.env.SMTP_HOST ? process.env.SMTP_HOST.replace(/["']/g, "").trim() : "";
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER ? process.env.SMTP_USER.replace(/["']/g, "").trim() : "";
  const rawPass = process.env.SMTP_PASS || "";
  // Sanitize the password: remove any quotes and spaces (Gmail App Passwords are 16-character keys without spaces)
  const pass = rawPass.replace(/["']/g, "").replace(/\s+/g, "");
  const secure = process.env.SMTP_SECURE === "true";

  if (!host || !user || !pass) {
    console.warn("SMTP credentials not fully configured. Skipping email delivery. Details:", { host, user, hasPass: !!pass });
    return;
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // Admin Notification Email
  const adminMailOptions = {
    from: `"Webrix System" <${user}>`,
    to: "heywebrix@gmail.com",
    subject: `New Project Scoping Form Submission - ${name}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; color: #111;">
        <h2 style="color: #60A5FA; border-bottom: 2px solid #eaeaea; padding-bottom: 10px;">New Scoping Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Company:</strong> ${company || "Not Specified"}</p>
        <p><strong>Project Category:</strong> ${category || "General"}</p>
        <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #60A5FA; border-radius: 4px;">
          <p style="margin: 0; white-space: pre-wrap;"><strong>Message:</strong><br/>${message}</p>
        </div>
      </div>
    `,
  };

  // User Acknowledgment Email
  const userMailOptions = {
    from: `"Webrix Team" <${user}>`,
    to: email,
    subject: "Thank you for contacting Webrix!",
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #eaeaea; border-radius: 12px; color: #333;">
        <h2 style="color: #1a1a1a; margin-top: 0;">Thanks for reaching out, ${name}!</h2>
        <p style="font-size: 15px; line-height: 1.6; color: #555;">
          We've successfully received your project scoping request. One of our lead system architects will review the details and get back to you within 24 hours to schedule an introductory call.
        </p>
        
        <div style="margin: 24px 0; padding: 20px; background-color: #f7f7f9; border-radius: 8px;">
          <h4 style="margin-top: 0; color: #1a1a1a; border-bottom: 1px solid #eaeaea; padding-bottom: 8px;">Submission Summary:</h4>
          <p style="margin: 6px 0; font-size: 14px;"><strong>Category:</strong> ${category}</p>
          <p style="margin: 6px 0; font-size: 14px;"><strong>Company:</strong> ${company || "Not Specified"}</p>
          <p style="margin: 12px 0 0 0; font-size: 14px; font-style: italic; color: #666; white-space: pre-wrap;">"${message}"</p>
        </div>
        
        <p style="font-size: 14px; color: #888; border-top: 1px solid #eaeaea; padding-top: 16px; margin-top: 24px;">
          Best regards,<br/>
          <strong>Webrix Engineering Team</strong><br/>
          <a href="https://webrix.co.in" style="color: #60A5FA; text-decoration: none;">webrix.co.in</a>
        </p>
      </div>
    `,
  };

  try {
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);
    console.log("SMTP mail delivery completed successfully.");
  } catch (error) {
    console.error("Error sending emails via SMTP:", error);
  }
}

// Public: Submit a contact/scoping form
export async function POST(req) {
  try {
    const { name, email, company, category, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields (name, email, message)" },
        { status: 400 }
      );
    }

    const db = await getDb();
    const newMessage = {
      name,
      email,
      company: company || "",
      category: category || "General",
      message,
      createdAt: new Date()
    };

    const result = await db.collection("messages").insertOne(newMessage);
    
    // Asynchronously trigger email delivery so it doesn't block client response
    sendEmails(newMessage);

    return NextResponse.json({ 
      success: true, 
      message: "Scoping request logged successfully", 
      messageId: result.insertedId 
    }, { status: 201 });
  } catch (error) {
    console.error("POST Message API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

// Admin only: Get all messages sorted by newest first
export async function GET(req) {
  try {
    const admin = getAuthUser(req);
    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const db = await getDb();
    const messages = await db.collection("messages")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ success: true, messages }, { status: 200 });
  } catch (error) {
    console.error("GET Messages API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
