import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("admin_token")?.value;
  const { pathname } = req.nextUrl;

  // Protect admin dashboard routes
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  // Prevent logged-in admin from visiting login page
  if (pathname === "/admin/login") {
    if (token) {
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"]
};
