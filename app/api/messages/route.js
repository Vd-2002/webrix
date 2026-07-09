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
    }
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
    subject: `New Project Scoping Form Submission - ${name}`,
    text: `New Project Scoping Form Submission - ${name}\n\nLead Name: ${name}\nEmail: ${email}\nCategory: ${category}\nCompany: ${company || "Not Specified"}\nMessage: ${message}`,
    html: `
      <div style="background-color: #030308; padding: 40px 20px; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, Arial, sans-serif; color: #ffffff; text-align: center;">
        <div style="max-width: 600px; margin: 0 auto; background: #070712; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 24px; padding: 40px; text-align: left; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
          
          <!-- Branding Header -->
          <div style="border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 24px; margin-bottom: 24px; text-align: center;">
            <h1 style="margin: 0; font-size: 26px; font-weight: 800; letter-spacing: 2px; color: #ffffff; font-family: 'Bricolage Grotesque', Arial, sans-serif;">
              WE<span style="color: #60A5FA;">BRIX</span>
            </h1>
            <p style="margin: 4px 0 0 0; font-size: 10px; font-family: monospace; letter-spacing: 3px; color: rgba(255,255,255,0.4); text-transform: uppercase;">
              System alert Control Board
            </p>
          </div>

          <!-- Title / Headline -->
          <h2 style="font-size: 22px; font-weight: 800; color: #ffffff; margin-top: 0; margin-bottom: 12px; line-height: 1.25;">
            New Scoping Request Received
          </h2>
          <p style="font-size: 14px; line-height: 1.6; color: rgba(255,255,255,0.7); margin-bottom: 24px;">
            A user has submitted a new project scope details form on the website.
          </p>

          <!-- Details Box -->
          <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 16px; padding: 24px; margin-bottom: 24px;">
            <h3 style="margin-top: 0; font-size: 14px; font-weight: 700; color: #34D399; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 16px;">
              Lead Information Details:
            </h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: rgba(255,255,255,0.8);">
              <tr>
                <td style="padding: 8px 0; color: rgba(255,255,255,0.4); width: 30%;">Lead Name</td>
                <td style="padding: 8px 0; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: rgba(255,255,255,0.4);">Email</td>
                <td style="padding: 8px 0; font-weight: 600;"><a href="mailto:${email}" style="color: #60A5FA; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: rgba(255,255,255,0.4);">Category</td>
                <td style="padding: 8px 0; font-weight: 600;">${category}</td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 8px 0; color: rgba(255,255,255,0.4);">Company</td>
                <td style="padding: 8px 0; font-weight: 600;">${company}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 8px 0; color: rgba(255,255,255,0.4); vertical-align: top;">Message</td>
                <td style="padding: 8px 0; line-height: 1.5; color: rgba(255,255,255,0.9); white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
          </div>

          <!-- Divider Line -->
          <div style="height: 1px; background: linear-gradient(to right, #60A5FA, #A78BFA, #34D399); margin: 24px 0;"></div>

          <!-- Footer block -->
          <div style="text-align: center; font-size: 12px; color: rgba(255,255,255,0.4); line-height: 1.5;">
            <p style="margin: 0;">This email is auto-generated by the Webrix API system.</p>
            <p style="margin: 4px 0 0 0;">
              <a href="https://webrix.co.in/admin" style="color: #60A5FA; text-decoration: none;">Open Admin Panel Dashboard</a>
            </p>
          </div>

        </div>
      </div>
    `,
  };

  // User Acknowledgment Email
  const userMailOptions = {
    from: `"Webrix Team" <${user}>`,
    to: email,
    subject: "Thank you for contacting Webrix!",
    text: `Hi ${name},\n\nThank you for reaching out! We have successfully received your project scoping request. Our system engineering team will review the details and get back to you within 24 hours.\n\nSummary of details:\nCategory: ${category}\nCompany: ${company || "Not Specified"}\nMessage: "${message}"\n\nBest regards,\nWebrix Engineering Team\nhttps://webrix.co.in`,
    html: `
      <div style="background-color: #030308; padding: 40px 20px; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, Arial, sans-serif; color: #ffffff; text-align: center;">
        <div style="max-width: 600px; margin: 0 auto; background: #070712; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 24px; padding: 40px; text-align: left; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
          
          <!-- Branding Header -->
          <div style="border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 24px; margin-bottom: 24px; text-align: center;">
            <h1 style="margin: 0; font-size: 26px; font-weight: 800; letter-spacing: 2px; color: #ffffff; font-family: 'Bricolage Grotesque', Arial, sans-serif;">
              WE<span style="color: #60A5FA;">BRIX</span>
            </h1>
            <p style="margin: 4px 0 0 0; font-size: 10px; font-family: monospace; letter-spacing: 3px; color: rgba(255,255,255,0.4); text-transform: uppercase;">
              Websites That Convert
            </p>
          </div>

          <!-- Title / Headline -->
          <h2 style="font-size: 22px; font-weight: 800; color: #ffffff; margin-top: 0; margin-bottom: 12px; line-height: 1.25;">
            Thank You for Partnering with Webrix!
          </h2>
          <p style="font-size: 14px; line-height: 1.6; color: rgba(255,255,255,0.7); margin-bottom: 24px;">
            Hi ${name}, we have successfully received your project scoping request. Our engineering team is currently reviewing your parameters and will get in touch with you at <strong style="color: #60A5FA;">${email}</strong> within 24 hours to align on next steps.
          </p>

          <!-- Details Box -->
          <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 16px; padding: 24px; margin-bottom: 24px;">
            <h3 style="margin-top: 0; font-size: 14px; font-weight: 700; color: #A78BFA; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 16px;">
              Scoping Specification Parameters:
            </h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: rgba(255,255,255,0.8);">
              <tr>
                <td style="padding: 8px 0; color: rgba(255,255,255,0.4); width: 30%;">Category</td>
                <td style="padding: 8px 0; font-weight: 600;">${category}</td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 8px 0; color: rgba(255,255,255,0.4);">Company</td>
                <td style="padding: 8px 0; font-weight: 600;">${company}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 8px 0; color: rgba(255,255,255,0.4); vertical-align: top;">Description</td>
                <td style="padding: 8px 0; line-height: 1.5; color: rgba(255,255,255,0.9); font-style: italic; white-space: pre-wrap;">"${message}"</td>
              </tr>
            </table>
          </div>

          <!-- Divider Line -->
          <div style="height: 1px; background: linear-gradient(to right, #60A5FA, #A78BFA, #34D399); margin: 24px 0;"></div>

          <!-- Footer block -->
          <div style="text-align: center; font-size: 12px; color: rgba(255,255,255,0.4); line-height: 1.5;">
            <p style="margin: 0;">This email is sent on behalf of <strong>Webrix Group</strong>.</p>
            <p style="margin: 4px 0 0 0;">
              <a href="https://webrix.co.in" style="color: #60A5FA; text-decoration: none;">webrix.co.in</a> | 
              <a href="mailto:heywebrix@gmail.com" style="color: #60A5FA; text-decoration: none;">heywebrix@gmail.com</a>
            </p>
          </div>

        </div>
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
