import React from 'react';
import {auth, signOut} from '@/auth';

const Dashboard = async() => {
    // Get an instance of auth, and if the user is loged out, they should not be able to access dashboard
    const session = await auth();
  return (
    <div>
      <p className='text-sm'>{JSON.stringify(session)}</p>
    <form action={async()=>{
      "use server"
      await signOut();
    }}>

    <button type='submit'>
      Sign out
    </button>
    </form>
    </div>
  )
}

export default Dashboard