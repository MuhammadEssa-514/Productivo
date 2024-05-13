"use client"
import React from 'react'
import Navbar from '../Dashbord/Navbar'
import Head from '../Dashbord/Head'
import Sidebar from '../Sidebar/Sidebar'
import Linechart from '../Dashbord/Linechart'
import Product from '../product/product'
import Progressbar from './Progressbar'
import Table from './Table'
import Slider from './Slider'

function Market() {
  return (
    <div>
     <div className='bg-gray-300 flex '>
      {/* <div className='bg-[#004AAD] w-[231px] h-[1628px] text-white flex'>
        <Sidebar />
      </div> */}
      <div className='w-full' > 
        <div className='m-auto'>
          <div className='flex items-center justify-between text-black bg-white'>
            <h1>
              Market
            </h1>
          <Navbar/>

          </div>
                <div className='mx-7 my-7 '>
                <div className='flex gap-4 my-7'>
                   <div className='bg-white w-[630px] p-10'>
                    <h1 className='text-[22px] font-semibold'>New Lounches</h1>
                    <hr className='my-4'/>
                   <Slider />
                   </div>
                 <div className='bg-white w-[493px]'>

                  <Linechart/>
                 </div>

                
                </div>
                <div className='bg-white text-black'>
                    <h1 className='p-5'>Product List</h1>
                    <Product/>
                </div>
                <div className='flex h-[40vh] gap-5 justify-between '>
                  <div className='bg-green-300 text-black w-[40%] px-9'>
                    <h1 className='py-5'>Trending Brands</h1>
                    <Progressbar/>
                  </div>
                  <div  className='bg-red-400 w-[595px] p-5 overflow-hidden'>
                    <Table/>
                  </div>
                </div>
                </div>
          </div>
    
      </div>
    </div>
    
    </div>
  )
}

export default Market