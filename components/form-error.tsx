import {ExclamationTriangleIcon} from '@radix-ui/react-icons';

interface FormErrorPorps {
    message?: string
};
export const FormError =({message}:FormErrorPorps)=>{
    if(!message) return null;

    return(
        <div className='bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive'>
            <ExclamationTriangleIcon className='h-4 w-4'/>
            <p id="error-message">{message}</p>
        </div>
    );
};
