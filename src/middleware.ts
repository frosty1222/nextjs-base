import { NextResponse, NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // const isAuthenticated = request.headers.get('Authorization') === 'Bearer your_token_here';

    // if (!isAuthenticated) {
    //   return NextResponse.redirect(new URL('/login',request.url));
    // }
  
    return NextResponse.next();
}
 
export const config = {
  matcher: ['/']
}