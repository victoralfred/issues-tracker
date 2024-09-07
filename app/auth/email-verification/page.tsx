import { EmailTokenVerification } from '@/components/auth/token-verification'
import React, {Suspense} from 'react'

const TokenVerification = () => {
  return (
    <Suspense>
      <EmailTokenVerification/>
    </Suspense>
  )
}

export default TokenVerification