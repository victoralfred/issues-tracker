"use server"
import { getUserByEmail } from "@/data/user";
import { getVerificationByTokenByToken } from "@/data/verification-token";
import { db } from "@/lib/db";
interface Result {
    success: string;
    error: string
}
/**
 * This function will be used for verifying the user email whenever an action which requires token verification occurs.
 * @param token 
 * @returns 
 */
export const verifyEmailAddressByToken = async (token: string)=>{
    try{
        const existingToken = await getVerificationByTokenByToken(token);
    if(!existingToken){
        return {error: "Token does not exixt",  success:""};
    }
    const hasEpired = new Date(existingToken.expires) < new Date();
    if(hasEpired){
        return {error: "Token has expired"};
    }
    const useToVerify = await getUserByEmail(existingToken.email);
    if(!useToVerify){
        return {error: "User with token does not exist", success:""};
    }
        await db.user.update({
            where: {id: useToVerify.id},
            data: {emailVerified: new Date(),
                email: existingToken.email
            }
        })
        await db.verifiationToken.delete({
            where: {id: existingToken.id}
        })
    }catch(error){
        return {error: "An unknown error occured when verifying token",success: ""};
    }
    return {success:" Email verified",error:""};
}