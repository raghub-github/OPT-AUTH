// src/app/middleware.js
import { NextResponse } from 'next/server'

// Paths that require authentication
const protectedRoutes = ['/profile']

export function middleware(request) {
    const token =
        request.cookies.get('token')?.value || request.headers.get('Authorization')?.replace('Bearer ', '')

    const { pathname } = request.nextUrl

    const isProtected = protectedRoutes.some((route) => pathname.startsWith(route))

    // If route is protected and no token is found, redirect to /login
    if (isProtected && !token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

// Apply middleware only to relevant routes
export const config = {
    matcher: ['/profile'],
}