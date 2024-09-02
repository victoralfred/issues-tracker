import React from 'react';
import {auth} from '@/auth';

const Dashboard = async() => {
    // Get an instance of auth, and if the user is loged out, they should not be able to access dashboard
    const session = await auth();
  return (
    <div>{JSON.stringify(session)}</div>
  )
}

export default Dashboard