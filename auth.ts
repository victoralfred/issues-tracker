import NextAuth, {type DefaultSession } from "next-auth"
import {PrismaAdapter} from '@auth/prisma-adapter'
import { db } from "@/lib/db"
import authConfig from "@/auth.config"
import { getUserByID } from "./data/user"

import { UserRoles } from "@prisma/client"

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRoles
}
// Extend the User Interface
declare module "next-auth"{
    interface Session{
      user: ExtendedUser
  }
}
export const { 
  handlers:{GET, POST}, 
    signOut,
    signIn, 
    auth 
 } = NextAuth({
  pages:{
    signIn:"/auth/login",
    error:"auth/error"
  },
  events:{
    async linkAccount({user}){
      await db.user.update({
        where: {id: user.id},
      data:{ emailVerified: new Date()}})
    }
  },
  callbacks:{
    //Add implement token verification on the auth call back to ensure total protection.
    // Now I dont know which providers exist, But I am only requiring email verifiction for authentication without providers
    async signIn({user, account}){
      // Allow OAuth without email verification, since the providers are trusted
      // Else if credential, do a check on the account
        if(account?.provider!= "credentials") return true;
        const existingUser = await getUserByID(user.id);
        // Prevent signin without email verification
        if(!existingUser?.emailVerified) return false;

        return true;
    },
    // What we want to do is add the user id to the sesssion token to make it available in all component using session
    async session({token, session}){
      if(token.sub && session.user) session.user.id = token.sub;
      if(token.role && session.user) session.user.role = token.role as UserRoles;
      return session;
    },
    async jwt({token}) {
      if(!token.sub) return token
      const currentUser = await getUserByID(token.sub);
      if(!currentUser) return token;
      token.role = currentUser.userRole;
      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: {strategy: "jwt"},
  ...authConfig,
})