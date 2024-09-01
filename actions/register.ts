"use server"
import { RegisterSchema } from '@/schemas';
import z from 'zod';

// Useing server action
export const register = async (values: z.infer<typeof RegisterSchema>)=>{
    const validated = RegisterSchema.safeParse(values)
    if(!validated.success){
        return {error: 'Invalid fields'}
    }
    return {success: "Email Send!"}
}