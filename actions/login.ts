"use server"
import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/route';
import { LoginSchema } from '@/schemas';
import { AuthError } from 'next-auth';
import z from 'zod';
import {generateVerificationToken} from "@/data/tokens"
import { getUserByEmail } from '@/data/user';

// Useing server action
export const login = async (values: z.infer<typeof LoginSchema>)=>{
    const validated = LoginSchema.safeParse(values)
    if(!validated.success){
        return {error: 'Invalid fields'}
    }

    const {email, password} = validated.data;
    // Get a user by email to confirm if the user is able to login using email or password
    const exixtingUser = await getUserByEmail(email)
    if(!exixtingUser || !exixtingUser.email || !exixtingUser.password){
        return {error: "Invalid credentials"}
    }
    if(!exixtingUser.emailVerified){
        const verificationToken = await generateVerificationToken(exixtingUser.email)
        return { success: "Confirmation email sent"}
    }
    try{
        await signIn("credentials", {
            email, password, redirectTo: DEFAULT_LOGIN_REDIRECT
        })

    }catch(error){
        if(error instanceof AuthError){
            switch(error.type){
                case "CredentialsSignin": 
                return {error: "Invalid credentials!"};
                default:
                    return {error: " Something went wrong!"}
            }
            
        }
        throw error;

    }
}