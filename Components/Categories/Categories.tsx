import React from "react";
import Navbar from "../Dashbord/Navbar";
import Categorieitems from "./Categorieitems";

function Categories() {
  return (
    <div>
      <div className="flex items-center w-full justify-between px-7 bg-white text-black ">
        <h1 className=" text-[24px] font-semibold">Beverages</h1>
        <Navbar/>
        
      </div>
      <div className="p-7">
<Categorieitems/>
      </div>

    </div>
  );
}

export default Categories;
