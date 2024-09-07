"use client"
import  {Suspense } from 'react'
import { AiFillBug } from 'react-icons/ai';
import Link from 'next/link';
import { usePathname,useRouter } from 'next/navigation'
import classNames from 'classnames'
import { useCurrentUser } from '@/hooks/current-user';
import {DEFAULT_LOGIN_REDIRECT,authRoutes} from '@/route'
const AuthenticateHeader =()=>{
    const currentPath = usePathname();
    const user = useCurrentUser();

    const isUserLogin = user?.id? true: false

    const links =[
        {label: 'Dashboard', href:DEFAULT_LOGIN_REDIRECT,  auth: isUserLogin},
        {label: 'Issues', href: '/issues',  auth: isUserLogin},
        {label: "Login", href: '/auth/login', auth: !isUserLogin},
        {label: "Logout", href: '/auth/logout', auth: isUserLogin}
    ];
    return(
        <Suspense>
            <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
            <Link href={"/"}><AiFillBug /></Link>
            <ul className='flex  space-x-6'>
            {links.filter(link=>link.auth)
            .map(link=> 
                <Link 
                     key={link.href}
                     className={classNames({
                      'text-zinc-900': link.href === currentPath,
                      'text-zinc-500': link.href !== currentPath,
                      'hover:text-zinc-800 transition-colors': true
                    })} 
                     href={link.href}>
                      {link.label}
                </Link>
        )}
            </ul>
        </nav>
        </Suspense>
    )
}

export default AuthenticateHeader;