import Categories from '@/Components/Categories/Categories'
import Sidebar from '@/Components/Sidebar/Sidebar'
import React from 'react'

function Categoriespage() {
  return (


    <div className='block lg:flex md:flex'>
      <div className='bg-[#004AAD] w-[231px] text-white '>
        <Sidebar />
      </div>
      <div className="bg-gray-300 w-full ">
      <Categories/>
      </div>
    </div>
  )
}

export default Categoriespage
