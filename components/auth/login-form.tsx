"use client"
import React from 'react'
import { CardWraper } from './card-wrapper'

export const LoginForm = () => {
  return (
     <CardWraper
     headerLabel='Welcome back'
     backButtonLabel='Dont have an account?'
     backButtonHref='"/auth/register'
     showSocial>
        Login Form!
     </CardWraper>
  )
};
