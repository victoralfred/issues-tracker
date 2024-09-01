"use server"
import { LoginSchema } from '@/schemas';
import z from 'zod';

// Useing server action
export const login = async (values: z.infer<typeof LoginSchema>)=>{
    const validated = LoginSchema.safeParse(values)
    if(!validated.success){
        return {error: 'Invalid fields'}
    }

    return {success: "Email Send!"}
}