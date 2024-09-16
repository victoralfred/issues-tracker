import { NextRequest, NextResponse } from "next/server";
import axios from 'axios';
import { JSEncrypt } from 'jsencrypt';
interface response {
    pk: string;
    pkvHash: string;
    dateTime: string
}
export const GET= async(request: NextRequest)=>{
    // try{
    //    const response = await axios.get("http://172.19.64.1:7990/rest/api/v1/encryption",{
    //     timeout:20
    //    })
    //     const {pk, pkvHash,dateTime}: response = response.data
    //     const publicKey = `-----BEGIN PUBLIC KEY-----\n${pk}\n-----END PUBLIC KEY-----`;
    //     const encrypt = new JSEncrypt();
    //     encrypt.setPublicKey(publicKey);
    //     const dataToEncrypt = 'James wella';
    //     const encrypted = encrypt.encrypt(dataToEncrypt);
    //     return NextResponse.json({encrypted});
  
    // }catch(error){
    //     console.log(error)
    // }
    return NextResponse.json({message:"Hello World"});
   
}