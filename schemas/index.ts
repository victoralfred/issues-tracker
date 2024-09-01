import * as z from 'zod'

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1,{
        message: "Password is required"
    })
});


export const RegisterSchema = z.object({
    name: z.string().min(1,{
        message: "Name is Required!"
    }),
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(6,{
        message: "Minimum 6 character required!"
    })

});
