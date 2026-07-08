import { NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth";

export async function GET(req) {
  try {
    const admin = getAuthUser(req);
    
    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { success: true, user: admin },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
