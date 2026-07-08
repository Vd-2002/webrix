import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { getAuthUser } from "@/lib/auth";

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
