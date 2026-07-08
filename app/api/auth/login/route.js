import { NextResponse } from "next/server";
import { signToken } from "@/lib/auth";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Verify hardcoded credentials requested by the user
    if (email === "heywebrix@gmail.com" && password === "webrix@2026") {
      const token = signToken({ email, role: "admin" });
      
      const response = NextResponse.json(
        { success: true, message: "Logged in successfully" },
        { status: 200 }
      );

      // Set cookie secure, httpOnly, sameSite lax, path /
      response.cookies.set("admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24, // 1 day in seconds
        path: "/"
      });

      return response;
    }

    return NextResponse.json(
      { success: false, message: "Invalid email or password" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
