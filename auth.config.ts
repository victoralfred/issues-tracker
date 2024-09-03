// import GitHub from "next-auth/providers/github"
import bcrypt from 'bcryptjs'
import Credentials  from "next-auth/providers/credentials";
import type {NextAuthConfig} from "next-auth"
import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./data/user";
import Google from "next-auth/providers/google"
import Gitgub from "next-auth/providers/github"
import GitHub from 'next-auth/providers/github';


// Helper to allow Prisma use edge features of next auth
export default {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        Credentials({
            async authorize (credentials) {
                // Validate the input credentials using your schema
                const validatedFields = LoginSchema.safeParse(credentials);
                if(validatedFields.success){
                    const {email, password} = validatedFields.data;
                    // Fetch the user by email
                    const user = await getUserByEmail(email);
                    if(!user || !user.password){
                        return null;
                    }
                    // Compare the provided password with the stored hashed password
                    const checkPaasswordMatch = await bcrypt.compare( password, user.password);
                    if(checkPaasswordMatch){
                        return {
                            ...user,
                            role: user.userRole
                        };
                    }
                }
                return null;

            }
        })
    ],
}satisfies NextAuthConfig;