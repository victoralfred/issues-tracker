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
      <div className="flex h-screen">
    {/** LEFT ASIDE */}
    <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-200 p-4">
    <Link href={"/"} className="flex justify-center items-center lg:justify-start gap-2 ">
        <AiFillBug color={colors.tint}/>
        <span className="hidden lg:block text-cyan-950">Issues Tracker</span>
      </Link>
      <Aside/>
    </div>

    {/** RIGHT ASIDE */}
    <div className="w-[86%] md:w-[92%]  lg:w-[84%] xl:w-[86%] bg-blue-200 overflow-scroll">
    <NavBar/>
      {children}
    </div>

  </div>
    </SessionProvider>
  )
}
