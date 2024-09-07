import { PasswordResetForm } from '@/components/auth/password-reset'
import React, {Suspense } from 'react'

const PasswordReset =() => {
  return (
     <Suspense>
      <PasswordResetForm/>
     </Suspense>
  )
}

export default PasswordReset