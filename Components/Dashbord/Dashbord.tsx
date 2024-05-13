"use client"
import React from "react";
import Navbar from "./Navbar";
import Head from "./Head";
import Product from "../product/product";
import Linechart from "./Linechart";
import Navhead from "./Navhead";
import Progressbar from "../Market/Progressbar";
import CircleChart from "./CircleChart";
import Login from "../Login/Login";


function Dashbord() {
  return (
    <div>
      <div className="flex items-center justify-between px-7 bg-white text-black  ">
        <h1 className=" text-[24px] font-semibold">Dashbord</h1>
        <Navbar />
      </div>

      <div className="bg-gray-300 py-[7%] px-7 ">
        <Navhead/>
        <Head />


      <div className="lg:flex md:block gap-[19px]">
        <div className=" lg:w-[60%] md:w-full bg-white p-6 leading-6 rounded-lg">
          <h1 className="pb-5 text-[22px] font-semibold">Alcopops  Popularity</h1>
        </div>
        <div className="lg:w-[50%] md:w-full bg-white p-6 leading-6 rounded-lg">
          <h1 className="pb-5 text-[22px] font-semibold">Price Development</h1>
        <Linechart />
          
        </div>
      </div>

      <div className="lg:flex md:block gap-[19px] my-[30px]">
        <div className="bg-white lg:w-[60%] md:w-full  p-6 leading-6 rounded-lg">
        <h1 className="pb-5 text-[22px] font-semibold">Popular Flavors</h1>
          <div className="w-[60%]">
          <CircleChart/>
          </div>
        
        </div>
        <div className="bg-white lg:w-[50%] md:w-full p-6 leading-6 rounded-lg">
        <h1 className="pb-5 text-[22px] font-semibold">Popular Brands</h1>
          <Progressbar/>
        </div>
      </div>
      <div className="mt-10 bg-white rounded-lg">
          <h1 className="text-[22px] font-semibold py-5">New Product Launches</h1>
          <Product />
        </div>

    </div>
    <div className=''>
        <Login />
        </div>
  

      </div>
  );
}

export default Dashbord;