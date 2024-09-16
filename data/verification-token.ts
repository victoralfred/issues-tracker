"use server"
import { db } from "@/lib/db";
/**
 * Resource used for interracting with the token table to fetch token by a given user email address
 * @param email_address 
 * @returns VerificationToken
 */
export const getVerificationTokenByEmail = async(email: string)=>{
    try{
       const verificatioN_token = await db.verifiationToken.findFirst({
            where: {email: email}
        });
        return verificatioN_token;
    }catch(error){
        return null;
    }
}
/**
 * A l
 * @param token 
 * @returns 
 */
export const getVerificationByTokenByToken = async(token: string)=>{
    try{
       const verificatioN_token = await db.verifiationToken.findUnique({
            where: {token: token}
        });
        return verificatioN_token;
    }catch(error){
        return null;
    }
}