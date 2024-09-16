import { ServerCards } from '@/components/servers/server-card';
import React from 'react';

const Dashboard = async() => {
  const online = true;
  const offline = true;

  return (
    <div className='flex xl:flex-row p-4 gap-4 md:flex-row sm:flex-col max-sm:flex-col'>
      {/** LEFT  */}
      <div className='w-full lg:w-2/3'>
        <div className='flex gap-2'>
        <ServerCards headerLabel='Server 1' backButtonLabel='View' backButtonHref="/servers/${id}" status='online'
         properties='odd:bg-online even:bg-apptintColor'>
          <div> Online</div>
        </ServerCards>
        </div>
      </div>
      {/** RIGHT */}
      <div className='w-full lg:w-1/3 bg-black'>
       
      </div>
    </div>
  )
}

export default Dashboard