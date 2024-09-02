import NextAuth from "next-auth"
import {PrismaAdapter} from '@auth/prisma-adapter'
import { db } from "@/lib/db"
import authConfig from "@/auth.config"
 
export const { 
  handlers:{GET, POST}, signIn, signOut, auth 
 } = NextAuth({
  callbacks:{
    // What we want to do is add the user id to the sesssion token to make it available in all component using session
    async session({token, session}){
      if(token.sub && session.user) session.user.id = token.sub
      return session;
    },
    async jwt({token}) {
      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: {strategy: "jwt"},
  ...authConfig,
})