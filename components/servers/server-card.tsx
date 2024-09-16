"use client"
import { Card, CardContent, CardFooter,CardHeader } from '@/components/ui/card'
import { BackButton } from '@/components/auth/back-button';
import React from 'react';
interface CardWrapperProps{
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    properties?: string,
    status: string
    
};
// Extract the card wrapper wot
export const ServerCards =({children, headerLabel, backButtonLabel, backButtonHref, properties, status}: CardWrapperProps)=>{
    return(
        <div className={`${properties} rounded-2xl p-4 flex-1`}>
               {children}
        </div>
    )

};