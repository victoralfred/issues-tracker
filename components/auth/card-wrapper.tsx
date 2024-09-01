"use client"
import { Card, CardContent, CardFooter,CardHeader } from '@/components/ui/card'
import { HeaderComponent } from '@/components/auth/header';
import { SocialComponent } from '@/components/auth/social-login';

interface CardWrapperProps{
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean
};
// Extract the card wrapper wot
export const CardWraper =({children,headerLabel, backButtonLabel, backButtonHref, showSocial}: CardWrapperProps)=>{
    return(
    <Card className="w-[400px] shadow-md">
        <CardHeader>
            <HeaderComponent
             label={headerLabel}/>
         </CardHeader>
         <CardContent>
             {children}
         </CardContent>
         {showSocial &&(
            <CardFooter>
                <SocialComponent/>
            </CardFooter>
         )}
    </Card>)

};