// Will be consumed by the middle ware

/**
 * An array of routes which are accessbile to the public.
 * These routes do not require authentication.
 * @type {string[]}
 */
export const publicRoutes =[
    "/",
    "/auth/email-verification", "/api/encryption"
]
/**
 * An array of routes uysed for authentication.
 * These routes will redirect logged in users to /dashboard
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login", "/auth/register", "/auth/error", "/auth/forgot-password"
]
/**
 * The prefix for API authentication routes.
 * Routes which start with this preficx are used for api authentication purposes
 * @type {string}
 */
export const apiRoutePrefix = "/api/auth"
/** 
 * The defautl redirect path after logging
 * @type {string[]}
*/
export const DEFAULT_LOGIN_REDIRECT = "/dashboard"