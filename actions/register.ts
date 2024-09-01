"use server"
import { db } from '@/lib/db';
import { RegisterSchema } from '@/schemas';
import z from 'zod';
import bcrypt from 'bcrypt'
import { getUserByEmail } from '@/data/user';

// Useing server action
export const register = async (values: z.infer<typeof RegisterSchema>)=>{

    const validated = RegisterSchema.safeParse(values)
    if(!validated.success){
        return {error: 'Invalid fields'}
    };
    const {name, email, password} = validated.data;
    // Check if user already exist
    const userExist = await getUserByEmail(email);
    if(userExist){
        return {error: "Email is already taken"}
    };
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.user.create({
        data:{
            name,
             email, 
             password : hashedPassword
        }
    })
    // TODO: Send verification token email
    return {success: "User successfully registered"}
}