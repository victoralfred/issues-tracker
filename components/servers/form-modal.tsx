"use client"
import React, { useState } from "react";
import {AiFillEdit, AiFillDelete,AiOutlinePlus, AiFillCloseSquare} from "react-icons/ai";
const actions =[
       { type: "delete", element: <AiFillDelete color="red"/>},
       { type: "update", element: <AiFillEdit color="white"/>},
       { type: "create", element:  <AiOutlinePlus color="white" size={20}/>}
]
export const FormModal =({table, type, data, id}:{
    table: "aws"
        |"gks"
        |"acs"
        |"none";
    type: 
        "create"
        | "update"
        | "delete";
    data?: any;
    id?: number
})=>{
    const [open, setOpen] = useState(false)
    const size = type === "create"? "w-8 h-8" : "w-7 h-7"
    const bgColor = 
        type ==="create"
        ? "bg-appbaseColor": 
        type==="update"
        ? "bg-apptintColor"
        : "bg-applightColor"
    return(
        <>
        <button className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={()=>setOpen(true)}>
            {actions.filter(action => action.type === type)
            .map(action=>(
                <>{action.element}</>
            ))}
        </button>
        {open && (
            <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 flex items-center justify-center">
                <div className="relative bg-white p4 rounded-md w-[60%] sm:[80%] md:w-[70%] lg-[60%] xl-[50%] 2xl-[50%]">
                        Hello world
                        <div className="absolute top-1 right-1 cursor-pointer" onClick={()=>setOpen(false)}>
                            <AiFillCloseSquare/>
                        </div>
                </div>
            </div>
        )}
        </>
    )
}
