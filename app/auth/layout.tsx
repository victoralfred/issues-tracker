import React, { Children } from "react";

const AuthLayout = ({children}:{children: React.ReactNode})=>{
    return(
        <div className="h-full flex items-center justify-center
        bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 bg-sky-600">
            {children}
        </div>
    )
}
export default AuthLayout;