import React from 'react';
import Sidebar from '@/Components/Sidebar/Sidebar';
import Demographics from '@/Components/Demographic/Demographic';

function DashboardPage() {
  return (
    <div className='block lg:flex md:flex'>
      <div className='bg-[#004AAD] w-[231px] '>
        <Sidebar />
      </div>
      <div className="bg-[#FFFFFF] w-full ">
        <Demographics />
      </div>
    </div>
  );
}

export default DashboardPage;
