import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { getAuthUser } from "@/lib/auth";
import { ObjectId } from "mongodb";

// Admin only: Delete a message by Mongo ObjectId
export async function DELETE(req, { params }) {
  try {
    const admin = getAuthUser(req);
    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await params;
    const db = await getDb();

    // Verify valid Mongo ObjectId format
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid message ID format" },
        { status: 400 }
      );
    }

    const result = await db.collection("messages").deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, message: "Message not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message deleted successfully"
    });
  } catch (error) {
    console.error("DELETE Message API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
