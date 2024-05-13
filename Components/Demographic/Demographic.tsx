"use client"
import React from "react";
import Navbar from "../Dashbord/Navbar";
import Product from "../product/product";
import Linechart from "../Dashbord/Linechart";
import Navhead from "../Dashbord/Navhead";
import Progressbar from "../Market/Progressbar";
import CircleChart from "../Dashbord/CircleChart";
import Login from "../Login/Login";
import Table from "../Market/Table";


function Demographics() {
  return (
    <div>
      <div className="lg:flex md:block items-center justify-between px-7 bg-white text-black fixed w-[86%] ">
        <h1 className=" text-[24px] font-semibold">Demographics</h1>
        <Navbar />
      </div>

      <div className="bg-gray-300 py-[7%] px-7 ">
        <Navhead/>


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
      <div className="mt-10 bg-white rounded-lg ">
          <Table />
        </div>

    </div>
  
  

      </div>
  );
}

export default Demographics;