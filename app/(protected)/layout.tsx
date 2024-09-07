import { Inter } from "next/font/google";
import AuthenticateHeader from "./header";
import AuthenticatedFooter from "./footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full flex flex-col items-center
            bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
             from-sky-400 bg-sky-600">
              <AuthenticateHeader/>
                {children}
              <AuthenticatedFooter/>
    </div>
  );
}
