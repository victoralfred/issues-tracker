"use server"
import { db } from "@/lib/db"

/**
 * 
 * @param email Get a user by email address
 * @returns 
 */
export const getUserByEmail = async(email: string)=>{
    try{
        const user = await db.user.findUnique({where: {email}});
        return user;
    }catch{
        return null
    }
};
/**
 * 
 * @param id Get a user by ID
 * @returns 
 */
export const getUserByID = async(id: string|undefined)=>{
    try{
        const user = await db.user.findUnique({where: {id}});
        return user;
    }catch{
        return null
    }
};

