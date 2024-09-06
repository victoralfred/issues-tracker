import { Resend } from 'resend';

const resend = new Resend(process.env.RESENT_EMAIL_API_KEY);

export const sendVerificationEmail = async(email: string, token: string)=>{
    const validationLink = `http://localhost:3000/auth/email-verification?token=${token}`;
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Email verification',
            html: `<p><strong>Click <a href="${validationLink}">Email verification link</strong></a> to verify your email!</p>`
          });
}
