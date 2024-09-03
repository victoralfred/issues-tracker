"use client"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { Button} from "@/components/ui/button";
import oauthSignIn from "@/actions/oauthlogin";
import { useRouter } from "next/navigation";


export const SocialComponent =()=>{
    const router = useRouter()
    const socialLogin =async (provider: "google"| "github")=>{
        await oauthSignIn(provider)
        .then(result=>{
            router.push(result)
        }).catch(error=>{
            console.log(error)
        })
    }
    
    return(
        <div className="flex items-center w-full gap-x-2">
            <Button size={"lg"} className="w-full" variant={"outline"} onClick={()=>socialLogin("google")}>
                <FcGoogle className="h-5 w-5"/>
            </Button>
            <Button size={"lg"} className="w-full" variant={"outline"} onClick={()=>socialLogin("github")}>
                <FaGithub className="h-5 w-5"/>
            </Button>
        </div>
    )
};