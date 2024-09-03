import {v4 as uuidv4} from "uuid"
import {
    getVerificationTokenByEmail
}  from "./verification-token"
import {db} from "../lib/db"

export const generateVerificationToken = async (email: string)=>{
    const token = uuidv4();
    const expires = new Date(new Date().getTime()+ 3600* 10000);

     const tokenExist = await getVerificationTokenByEmail(email);
     if(tokenExist){
        await db.verifiationToken.delete({
            where: {id: tokenExist.email}
        })
     };
     const verificationToken = await db.verifiationToken.create({
        data:{
            email, token, expires
        }
     });
     return verificationToken;
}