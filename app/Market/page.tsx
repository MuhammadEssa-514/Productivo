import Market from '@/Components/Market/Market'
import Sidebar from '@/Components/Sidebar/Sidebar'
import React from 'react'


function MarketPage() {
  return (
    <div className='block lg:flex md:flex'>
        <div className='bg-[#004AAD] w-[531px] text-white '>
        <Sidebar/>
      </div>
      <div className="bg-gray-300 w-full ">
        <Market/>
      </div>
    </div>

  )
}

export default MarketPage