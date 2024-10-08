"use client";
import * as z from 'zod';
import React, { Suspense, useState } from 'react';
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
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface Message{
   success?:string;
   error?:string
}
export const LoginForm = () => {
   const searchParams = useSearchParams();
   const urlError = searchParams.get("error") === "OAuthAccountNotLinked" ? "Email already used by a different provider": null;
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
     <Suspense>
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
                                 <Button variant={"link"}
                                 size={"sm"} className='px-0 font-normal justify-center' >
                                    <Link href={"/auth/forgot-password"}>Forgot password?</Link>
                                 </Button>
                                 <FormMessage/>
                              </FormItem>
                           )}/>
                  </div>
                  <FormError message={error || urlError}/>
                  <FormSuccess message={success}/>
                  <Button type='submit'
                  className='w-full' disabled={isPending}>
                     Login
                  </Button>
            </form>
        </Form>
     </CardWraper>
     </Suspense>
  )
};
