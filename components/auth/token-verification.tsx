"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';
import { CardWraper } from './card-wrapper';
import {BeatLoader} from "react-spinners";
import { verifyEmailAddressByToken } from '@/actions/new-token-verification';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';

export const EmailTokenVerification = () => {
  const searchParam = useSearchParams();
  const [error, setError] = useState<string>("")
  const [success, setSuccess] = useState<string>("")
  const token  = searchParam.get("token")

  const onSubmit = useCallback( ()=>{
      if(!token){
        return {error: "Missing or invalid token"}
      }
      try{
        verifyEmailAddressByToken(token)
        .then(result=>{
          const {success, error} = result as {success: string, error: string}
            setSuccess(success)
            setError(error)
        }).catch(error=>{
         setError("Somethong went wrong")
        }) 
      }catch(error){
      }
     
  },[token]);

  useEffect(()=>{
    return ()=>{
      onSubmit();
    }
  }, [onSubmit])


  return (
    <CardWraper
    headerLabel='Confirming your email verification'
    backButtonHref='/auth/login'
    backButtonLabel='Back to login'>
        <div className='flex flex-col justify-center items-center w-full'>
            {!success || !error && <BeatLoader size={5}/>}
            <div>
            <FormError message={error}/>
            <FormSuccess message={success}/>
            </div>
        </div>
   </CardWraper>
  )
}
