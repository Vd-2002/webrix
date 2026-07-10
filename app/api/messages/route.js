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

  // Smart routing: Gmail behaves much better on cloud servers when using service: "gmail"
  const transporterOptions = {
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: false
    },
    connectionTimeout: 5000,
    greetingTimeout: 5000,
    socketTimeout: 5000
  };

  if (host.toLowerCase().includes("gmail")) {
    transporterOptions.service = "gmail";
  } else {
    transporterOptions.host = host;
    transporterOptions.port = port;
    transporterOptions.secure = secure;
  }

  const transporter = nodemailer.createTransport(transporterOptions);

  // Admin Notification Email
  const adminMailOptions = {
    from: `"Webrix System" <${user}>`,
    to: "heywebrix@gmail.com",
    replyTo: email,
    subject: `New Inquiry: ${name}`,
    text: `New Project Inquiry - ${name}\n\nLead Name: ${name}\nEmail: ${email}\nService Needed: ${category}\nCompany: ${company || "Not Specified"}\nMessage: ${message}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 15px; color: #222222; max-width: 550px; line-height: 1.6; margin: 0 auto; padding: 20px;">
        <h2 style="font-size: 18px; font-weight: 700; color: #111111; border-bottom: 1px solid #eeeeee; padding-bottom: 8px; margin-top: 0;">New Webrix Inquiry</h2>
        <p>Hello Webrix Team,</p>
        <p>A new visitor has sent a message on the website:</p>
        <ul style="padding-left: 20px; color: #333333;">
          <li><strong>Lead Name:</strong> ${name}</li>
          <li><strong>Email Address:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></li>
          <li><strong>Service Needed:</strong> ${category}</li>
          ${company ? `<li><strong>Company:</strong> ${company}</li>` : ""}
        </ul>
        <p><strong>Message details:</strong></p>
        <div style="margin: 15px 0; padding: 15px; background-color: #f9fafb; border-left: 3px solid #059669; border-radius: 4px; color: #444444; font-style: italic; white-space: pre-wrap;">${message}</div>
        <p style="font-size: 12px; color: #888888; border-top: 1px solid #eeeeee; padding-top: 12px; margin-top: 20px;">
          This message was auto-logged in your database. Open your <a href="https://webrix.co.in/admin" style="color: #2563eb; text-decoration: none;">Admin Panel Dashboard</a> to view all messages.
        </p>
      </div>
    `,
    headers: {
      "X-Priority": "3",
      "X-MSMail-Priority": "Normal",
      "Importance": "Normal"
    }
  };

  // User Acknowledgment Email
  const userMailOptions = {
    from: `"Webrix Team" <${user}>`,
    to: email,
    replyTo: user,
    subject: `We received your message - Webrix`,
    text: `Hi ${name},\n\nThank you for reaching out to Webrix! We have received your inquiry.\n\nHere is a summary of the details you sent:\nService Needed: ${category}\nCompany: ${company || "Not Specified"}\nMessage: "${message}"\n\nOur team will review your message and reply to you at this email address within 24 hours.\n\nBest regards,\nThe Webrix Team\nhttps://webrix.co.in\n\n---\nWebrix Headquarters: Solitaire Superb, Behind Ganesh Vihar Flats, Opposite Somnath Party Plot, Sardar Patel Ring Road, New Nikol, Ahmedabad, Gujarat - 382350, India\nThis email was sent in response to your contact request on our website.`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 15px; color: #222222; max-width: 550px; line-height: 1.6; margin: 0 auto; padding: 20px;">
        <p>Hi ${name},</p>
        <p>Thank you for reaching out to Webrix!</p>
        <p>We have successfully received your inquiry for the <strong>${category}</strong> service.</p>
        
        <p>Here is a summary of the details you sent:</p>
        <div style="margin: 15px 0; padding: 15px; background-color: #f9fafb; border-left: 3px solid #2563eb; border-radius: 4px; color: #444444; font-style: italic; white-space: pre-wrap;">"${message}"</div>
        
        <p>Our team is currently reviewing your message and will reply to you at this email address within 24 hours.</p>
        
        <p style="margin-top: 24px; padding-bottom: 20px; border-bottom: 1px solid #eeeeee;">
          Best regards,<br/>
          <strong>The Webrix Team</strong><br/>
          <a href="https://webrix.co.in" style="color: #2563eb; text-decoration: none;">webrix.co.in</a>
        </p>

        <p style="font-size: 11px; color: #888888; margin-top: 20px; line-height: 1.4; text-align: center;">
          Webrix Headquarters: Solitaire Superb, Behind Ganesh Vihar Flats, Opposite Somnath Party Plot, Sardar Patel Ring Road, New Nikol, Ahmedabad, Gujarat - 382350, India<br/>
          This email was sent in response to your contact request on our website.
        </p>
      </div>
    `,
    headers: {
      "X-Priority": "3",
      "X-MSMail-Priority": "Normal",
      "Importance": "Normal"
    }
  };

  try {
    await transporter.sendMail(adminMailOptions);
    console.log("Admin email delivered successfully.");
  } catch (error) {
    console.error("Error sending admin email via SMTP:", error);
  }

  try {
    await transporter.sendMail(userMailOptions);
    console.log("User email delivered successfully.");
  } catch (error) {
    console.error("Error sending user email via SMTP:", error);
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
    
    // Await email delivery so serverless container doesn't freeze before mail is sent
    await sendEmails(newMessage);

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
