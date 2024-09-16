import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import {
 publicRoutes,
 authRoutes, 
 apiRoutePrefix,
 DEFAULT_LOGIN_REDIRECT
} from '@/route';
import { NextRequest, NextResponse } from "next/server";
import { getExpectedRequestStore } from "next/dist/client/components/request-async-storage.external";

const {auth} = NextAuth(authConfig);
/**
 * The order of checking the routes matter, to avoid redirect loop
 */
export default auth((req)=>{
    const {nextUrl} = req
    const isLoggedIn = !!req.auth
    const isAPIAuthRoute = nextUrl.pathname.startsWith(apiRoutePrefix)
    const isPublicRoute  = publicRoutes.includes(nextUrl.pathname)
    const isAuthRoute = authRoutes.includes(nextUrl.pathname)
    // If we get to the landing pages, Check if the user is loggin in
    // and redirect the user to the dashboard
    if(isPublicRoute){
        if(isLoggedIn){
            return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT,nextUrl))
        }
        return NextResponse.next();
    }
    if(isAPIAuthRoute){
        return NextResponse.next();
    }

    if(isAuthRoute){
        // Check if use is logged in if YES, reidrect to the default page
        if(isLoggedIn){
            return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT,nextUrl))
        }
        return NextResponse.next();
    }
    if(!isLoggedIn && !isPublicRoute){
        return NextResponse.redirect(new URL("/auth/login", nextUrl))
    }
    return NextResponse.next();
})

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)','/','/(api|trcp)(.*)'],
  }