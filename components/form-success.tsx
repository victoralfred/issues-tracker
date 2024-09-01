import {CheckCircledIcon} from '@radix-ui/react-icons';

interface FormErroFormSuccessProps {
    message?: string
};
export const FormSuccess =({message}:FormErroFormSuccessProps)=>{
    if(!message) return null;

    return(
        <div className='bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500'>
            <CheckCircledIcon className='h-4 w-4'/>
            <p className="text-emerald-500" id="success-message">{message}</p>
        </div>
    );
};
