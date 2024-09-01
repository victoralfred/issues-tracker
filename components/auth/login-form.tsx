"use client";
import * as z from 'zod';
import React from 'react';
import { CardWraper } from '@/components/auth/card-wrapper';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import { LoginSchema } from '@/schemas';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {FormError} from '@/components/form-error'
import {FormSuccess} from '@/components/form-success'
export const LoginForm = () => {
   // Create the login form using zod infer
   const form = useForm<z.infer<typeof LoginSchema>>({
      resolver: zodResolver(LoginSchema),
      defaultValues:{
         email: "",
         password:""
      }
   });
   const onSubmit =(value: z.infer<typeof LoginSchema>)=>{
         console.log(value)
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
                                       type='email'/>
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
                                       type='password'/>
                                 </FormControl>
                                 <FormMessage/>
                              </FormItem>
                           )}/>
                  </div>
                  <FormError message='Invalid credentials!'/>
                  <FormSuccess message='Email sent!'/>
                  <Button type='submit'
                  className='w-full'>
                     Login
                  </Button>
            </form>
        </Form>
     </CardWraper>
  )
};
