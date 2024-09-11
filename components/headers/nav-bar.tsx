"use client"
import { useCurrentUser } from '@/hooks/current-user';
import React, { useEffect, useState } from 'react'
import {AiOutlineUser,AiFillMessage,AiOutlineSearch
} from "react-icons/ai";

const NavBar = () => {
    const user = useCurrentUser();
    const [username, setUserName] = useState<string|null|undefined>('')
    const [role, setRole] = useState<string|null|undefined>('')

    useEffect(()=>{
        return ()=>{
            setUserName(user?.name)
            setRole(user?.role)
        }
    }, [user])
  return (
    <div className='flex items-center justify-between p-4'>
      {/** SEARCH BAR */}
      <div className='hidden md:flex items-center justify-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2
      bg-white'>
       <AiOutlineSearch color='gray'/>
        <input type='text' placeholder='Search for server ...' className='w-[200px] p-2 bg-transparent outline-none' />
      </div>
      {/** ICONS AND USER */}
      <div className='flex items-center gap-6 justify-end w-full'>
        <div className='w-7 h-7 flex items-center justify-center cursor-pointer relative'>
            <AiFillMessage color='white'/>
            <div className='absolute -top-3 -right-3 w-3 h-5 flex items-center justify-center bg-purple-500
             text-white rounded-full text-xs p-2'
            >1</div>
        </div>
        <div className='flex flex-col'>
            <span className='text-xs leading-3 font-medium'>{username}</span>
            <span className='text-[10px] text-green-400 text-right'>{role?.toLocaleUpperCase()}</span>
        </div>
        <div className='w-7 h-7 flex items-center justify-center cursor-pointer'>
        <AiOutlineUser color='white'/>
        </div>
      </div>
    </div>
  )
}

export default NavBar
