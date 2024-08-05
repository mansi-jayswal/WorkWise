import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import { userRole } from './constants/enums';

export async function middleware(request: NextRequest) {
  const userRoutes = ['/dashboard', '/saved-posts'];
  const adminRoutes = ['/admin', '/admin/jobs'];

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const url = request.nextUrl.clone();

  const isUserRoute = userRoutes.some((prefix) =>
    url.pathname.startsWith(prefix),
  );

  const isAdminRoute = adminRoutes.some((prefix) =>
    url.pathname.startsWith(prefix),
  );

  // Redirect to login if trying to access a protected route without a token
  if (!token && (isAdminRoute || isUserRoute)) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // Redirect to dashboard if already logged in and trying to access login or register
  if (token && (url.pathname === '/login' || url.pathname === '/register')) {
    if (token.role === userRole.ADMIN) {
      url.pathname = '/admin';
    } else {
      url.pathname = '/dashboard';
    }
    return NextResponse.redirect(url);
  }

  if (token) {
    const userRole = token.role;
    if (isUserRoute && userRole !== 'user') {
      url.pathname = '/403'; // error page
      return NextResponse.redirect(url);
    }

    if (isAdminRoute && userRole !== 'admin') {
      url.pathname = '/403'; // error page
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images).*)'],
};
