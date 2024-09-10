"use client"
import  {Suspense } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { useCurrentUser } from '@/hooks/current-user';
import {DEFAULT_LOGIN_REDIRECT,authRoutes} from '@/route'
import {AiOutlineCloudServer,AiFillProfile,AiOutlineLogout,AiFillTool,AiOutlineKey} from "react-icons/ai";

const Aside =()=>{
    const currentPath = usePathname();
    const user = useCurrentUser();


    const isUserLogin = user?.id? true: false

    const links =[
      { title: "MENU",
       items:[
        {label: 'Dashboard', href:DEFAULT_LOGIN_REDIRECT},
        {label: 'Servers', href: '/servers', icon:<AiOutlineCloudServer/>},
        {label: "Plugins", href: '/plugins', icon:<AiFillTool/>},
        {label: "Keys", href: '/keys', icon: <AiOutlineKey/>},
       ],
    },
    {title: "OTHERS",
        items:[
            {label: 'Profile', href:DEFAULT_LOGIN_REDIRECT, icon: <AiFillProfile/>},
            {label: 'Settings', href: '/settings', icon: <AiOutlineCloudServer/>},
            {label: "Logout", href: '/auth/logout', icon: <AiOutlineLogout/>}
        ]
    }
    ];
    return(
        <Suspense>
            <div className="mt-4 text-sm">
             {
                links.map(item=>(
                    <div className='flex flex-col  gap-2' key={item.title}>
                        <span className='hidden lg:block font-light m-4 text-gray-400 my-4'>{item.title}</span>
                        {item.items.map(key=>(
                            <Link href={key.href} className='flex items-center lg:jutify-start gap-4 py-2 text-cyan-950'
                            key={key.href}>
                                {key.icon} 
                             <span className='hidden lg:block bold'> {key.label} </span>
                            </Link>
                        ))}
                    </div>
                ))
             }
            </div>
        </Suspense>
    )
}

export default Aside;