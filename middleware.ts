import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except /studio (Sanity), API routes, and static files
  matcher: ['/((?!studio|api|_next|_vercel|.*\\..*).*)'],
};
