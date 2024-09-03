import { db } from "@/lib/db";

export const getVerificationTokenByEmail = async(email_address: string)=>{
    try{
       const verificatioN_token = await db.verifiationToken.findFirst({
            where: {email: email_address}
        });
        return verificatioN_token;
    }catch(error){
        return null;
    }
}
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