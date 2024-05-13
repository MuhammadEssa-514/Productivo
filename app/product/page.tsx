"use client"
import React from 'react';
import Sidebar from '@/Components/Sidebar/Sidebar';
import Product from '@/Components/product/product';
import Navbar from '@/Components/Dashbord/Navbar';
import Head from '@/Components/Dashbord/Head';
import Slider from '@/Components/Market/Slider';
import Rate from '@/Components/Rate/Rate';
import ProRate from '@/Components/ProRate/ProRate';
import {GrCart} from "react-icons/gr";
import Faqs from '@/Components/Faqs/Faqs';

function ProductPage() {
  return (
    <div className='bg-gray-300 block lg:flex md:flex '>
       
      {/* <div className='bg-[#004AAD] w-[231px] h-[1628px] text-white flex'>
        <Sidebar />
      </div> */}
      <div className='w-full ' > 
        <div className='m-auto'>
          <div className='flex items-center justify-between text-black bg-white'>
            <h1>
              Product
            </h1>
          <Navbar/>

          </div>
          <Head/>
          </div>      
        <div>
        {/* <Product/> */}
        {/* <Slider/> */}

        <Slider/>
        </div>
      
        <div className='grid grid-cols-4'>
          
        <ProRate image={require("../../public/picture/pro 3.png")} productName={'Menthol E-Cigarette Kit'} originalPrice={74.50} discountedPrice={49.50} rating={5} reviewCount={3} icon={<GrCart/>}/>

        <ProRate image={require("../../public/picture/pro 3.png")} productName={'Menthol E-Cigarette Kit'} originalPrice={74.50} discountedPrice={49.50} rating={5} reviewCount={3} icon={<GrCart/>}/>

        <ProRate image={require("../../public/picture/pro 3.png")} productName={'Menthol E-Cigarette Kit'} originalPrice={74.50} discountedPrice={49.50} rating={5} reviewCount={3} icon={<GrCart/>}/>

        <ProRate image={require("../../public/picture/pro 3.png")} productName={'Menthol E-Cigarette Kit'} originalPrice={74.50} discountedPrice={49.50} rating={5} reviewCount={3} icon={<GrCart/>}/>


        </div>
        <div>
          <Rate/>
        </div>
        <div>
          <Faqs/>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
