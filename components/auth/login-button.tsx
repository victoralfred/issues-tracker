"use client"
import { useRouter } from "next/navigation";
//Define the interface of a Login Button
interface LoginButtonProps{
    children: React.ReactNode;
    mode?: "modal"| "redirect";
    asChil?: boolean;
};
// Create a Login button component and set the default mode to redirect
export const LoginButton =({children, mode="redirect", asChil}: LoginButtonProps) =>{
    const route = useRouter();
    const onClick =()=>{
        route.push("/auth/login")
    };
    if(mode==='modal'){
        return(
            <span>
                TODO: Implement modal
            </span>
        )
    };
    return (
        <span  onClick={onClick} className="cursor-pointer"> 
          {children}  
        </span>
    )
};