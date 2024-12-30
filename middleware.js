// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('auth-token');

  // Check if the user is authenticated
  // if (!token) {
  //   // Redirect unauthenticated users to the login page
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }

  return NextResponse.next();
}

// Apply middleware only to dashboard routes
export const config = {
  matcher: ['/dashboard/:path*'], // Protect all routes under /dashboard
};
