import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "webrix-super-secret-jwt-key-2026-auth!";

// Sign a JWT token for the admin
export function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
}

// Verify a JWT token
export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

// Extract and verify admin token from Next.js request cookies
export function getAuthUser(req) {
  try {
    // cookies are available on the NextRequest object via req.cookies.get('name')
    const cookieToken = req.cookies?.get("admin_token")?.value;
    if (!cookieToken) return null;
    return verifyToken(cookieToken);
  } catch (error) {
    return null;
  }
}
