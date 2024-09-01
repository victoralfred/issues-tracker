import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
const fonts = Poppins({
  subsets: ['latin'],
  weight: ["600"]
})

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center  justify-center 
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 bg-sky-600">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md", fonts.className)}>🔐 Auth</h1>
        <p className="text-white drop-shadow-md">A simple authentication system</p>
        <div>
         <LoginButton>
             <Button variant={"secondary"} size={'lg'}>Log in</Button>
         </LoginButton>
        </div>
      </div>
    </main>
  );
}
