import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
<<<<<<< HEAD
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

export async function middleware(request: NextRequest) {
  const session = getKindeServerSession()
  const isAuthenticated = await session.isAuthenticated()

  if (!isAuthenticated) {
    const loginUrl = new URL(
      `/api/auth/login?post_login_redirect_url=/dashboard`,
      request.url
    )
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
=======
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const { isAuthenticated } = getKindeServerSession();
    if(!await isAuthenticated())
    {
        return NextResponse.redirect(new URL('/api/auth/login?post_login_redirect_url=/dashboard', request.url))

    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard'],
}
>>>>>>> 06aa319 (added editor and canvas functionalities)
