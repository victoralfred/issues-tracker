import Aside from "../../components/headers/aside";
import Link from "next/link";
import { AiFillBug } from "react-icons/ai";
import { colors } from "@/components/colors";
import NavBar from "@/components/headers/nav-bar";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return(
    <SessionProvider>
      <div className="h-screen flex">
    {/** LEFT ASIDE */}
    <div className="md:w-[12%] w-[18%]  lg:w-[15%] xl:w-[10%] bg-red-50 p-4">
    <Link href={"/"} className="flex justify-center items-center lg:justify-start gap-2 ">
        <AiFillBug color={colors.tint}/>
        <span className="hidden lg:block text-cyan-950">Issues Tracker</span>
      </Link>
      <Aside/>
    </div>

    {/** RIGHT ASIDE */}
    <div className="w-[98%] md:w-[92%]  lg:w-[85%] xl:w-[90%] br-blue-200 overflow-scroll">
      <NavBar/>
      {children}
    </div>

  </div>
    </SessionProvider>
  )
}
