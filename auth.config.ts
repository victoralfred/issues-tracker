// import GitHub from "next-auth/providers/github"
import bcrypt from 'bcryptjs'
import Credentials  from "next-auth/providers/credentials";
import type {NextAuthConfig} from "next-auth"
import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./data/user";


// Helper to allow Prisma use edge features of next auth
export default {
    providers: [
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
                        return user;
                    }
                }
                return null;

            }
        })
    ],
}satisfies NextAuthConfig;