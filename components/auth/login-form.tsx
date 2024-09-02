"use client";
import * as z from 'zod';
import React, { useState } from 'react';
import { CardWraper } from '@/components/auth/card-wrapper';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import { LoginSchema } from '@/schemas';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {FormError} from '@/components/form-error';
import {FormSuccess} from '@/components/form-success';
import { login } from '@/actions/login';
import { useTransition } from 'react';
interface Message{
   success?:string;
   error?:string
}
export const LoginForm = () => {
   // Use transition to manage the login state
   const [isPending, startTransition] = useTransition();
   const [error, setError] = useState<string| undefined>("")
   const [success, setSuccess] = useState<string| undefined>("")
   // Create the login form using zod infer
   const form = useForm<z.infer<typeof LoginSchema>>({
      resolver: zodResolver(LoginSchema),
      defaultValues:{
         email: "",
         password:""
      }
   });
   // Handle the form using NexJS actions
   const onSubmit = async(values: z.infer<typeof LoginSchema>)=>{
      startTransition( async()=>{
         await login(values)
         .then(result=>{
            const message: Message  = result as Message
            if(message.error){
               setError(message.error)
            }else if(message.success){
               setSuccess(message.success)
            }
         })
      })
   }
  return (
     <CardWraper
     headerLabel="Welcome back"
     backButtonLabel="Dont have an account?"
     backButtonHref="/auth/register"
     showSocial>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6' name='login_form'>
                  <div className='space-y-4'>
                        <FormField 
                           control={form.control} 
                           name='email'
                           render={({field})=>(
                              <FormItem>
                                 <FormLabel>Email</FormLabel>
                                 <FormControl>
                                    <Input
                                       {...field}
                                       placeholder='jvtech@email.com'
                                       type='email'
                                       disabled={isPending}/>
                                 </FormControl>
                                 <FormMessage/>
                              </FormItem>
                           )}/>
                           <FormField 
                           control={form.control} 
                           name='password'
                           render={({field})=>(
                              <FormItem>
                                 <FormLabel>Password</FormLabel>
                                 <FormControl>
                                    <Input
                                       {...field}
                                       placeholder='********'
                                       type='password'
                                       disabled={isPending}/>
                                 </FormControl>
                                 <FormMessage/>
                              </FormItem>
                           )}/>
                  </div>
                  <FormError message={error}/>
                  <FormSuccess message={success}/>
                  <Button type='submit'
                  className='w-full' disabled={isPending}>
                     Login
                  </Button>
            </form>
        </Form>
     </CardWraper>
  )
};
