import NextAuth from "next-auth"
import {PrismaAdapter} from '@auth/prisma-adapter'
import { db } from "@/lib/db"
import authConfig from "@/auth.config"
import { getUserByID } from "./data/user"
 
export const { 
  handlers:{GET, POST}, signIn, signOut, auth 
 } = NextAuth({
  callbacks:{
    // What we want to do is add the user id to the sesssion token to make it available in all component using session
    async session({token, session}){
      if(token.sub && session.user) session.user.id = token.sub;
      if(token.role && session.user) session.user.role = token.role;
      return session;
    },
    async jwt({token}) {
      if(!token.sub) return token
      const currentUser = await getUserByID(token.sub);
      if(!currentUser) return token;
      token.role = currentUser.userRoles;
      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: {strategy: "jwt"},
  ...authConfig,
})