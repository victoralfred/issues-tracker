"use client"
interface AddServerProps{
    children: React.ReactNode;
    mode?: "modal"| "redirect";
    asChil?: boolean;
}
const onClickAction = ()=>{

}
export const AddServerButton = ({children, mode="redirect", asChil}: AddServerProps) => {
  return (
    <span className=' bg-apptintColor cursor-pointer' onClick={onClickAction}> 
        {children}
    </span>
  )
}
