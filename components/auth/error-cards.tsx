import React from 'react'

import { CardWraper } from './card-wrapper'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

export const ErrorCard = () => {
  return (
   <CardWraper
    headerLabel='Ops! something went wrong'
    backButtonHref='/auth/login'
    backButtonLabel='Back to login'>
        <div className='flex justify-center items-center w-full'>
            <ExclamationTriangleIcon className='text-destructive'/>
        </div>
   </CardWraper>
  )
}

