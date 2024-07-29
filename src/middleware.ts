import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const protectedRoutes = ['/dashboard', '/profile'];

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const url = request.nextUrl.clone();

  const isProtectedRoute = protectedRoutes.some((prefix) =>
    url.pathname.startsWith(prefix),
  );

  // if token is not there and user is tryna access protected route then redirect them to login page
  if (!token && isProtectedRoute) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // if token is n there and user is tryna access login or signuo route then redirect them to dashboard page
  if (token && (url.pathname === '/login' || url.pathname === '/register')) {
    url.pathname = '/dashboard'; // Redirect to a protected page
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images).*)'],
};
