"use server"
import {v4 as uuidv4} from "uuid"
import {
    getVerificationTokenByEmail
}  from "./verification-token"
import {db} from "../lib/db"

/**
 * Get a verification token by email address. If the token exixt, delete the ticken and create a new tokem
 * This method is called during credential loggin in to confirm that the user has verified email address.
 * If the user has not verified their email, delete the existing user token and send a new token
 * @param email 
 * @returns 
 */
export const generateVerificationToken = async (email: string)=>{
    const token = uuidv4();
    const expires = new Date(new Date().getTime()+ 3600* 10000);

     const tokenExist = await getVerificationTokenByEmail(email);
     if(tokenExist){
        await db.verifiationToken.delete({
            where: {id: tokenExist.id}
        })
     };
     const verificationToken = await db.verifiationToken.create({
        data:{
            email, token, expires
        }
     });
     return verificationToken;
}

