"use client"
import * as React from "react";
import { IoStarSharp } from "react-icons/io5";
import Image from "next/image";

interface ProductProps {
  image: string;
  productName: string;
  originalPrice: number;
  discountedPrice: number;
  rating: number;
  reviewCount: number;
  icon: string;
}
function ProRate ({image,productName,originalPrice,discountedPrice,rating,reviewCount,icon}:ProductProps) {

  const [selectedRating, setSelectedRating] = React.useState<number>(rating);

  const handleRatingClick = (newRating: number) => {
    setSelectedRating(newRating === selectedRating ? 0 : newRating);
  };


  return (
    <div
      style={{
        border: '1px solid',
        borderImage: 'linear-gradient(0deg, #FA00FF, #CC00FF,#004EFF) 1 ',
        backgroundOrigin: 'border-box',
        WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
        borderRadius:"15px"
      }}
      className=" bg-black flex flex-col pt-3.5 capitalize rounded-xl border border-blue-700 border-solid max-w-[335px] bg-black-2"
    >
      <p className="rounded-[50px]">
      <div className="flex flex-col items-start px-3 w-full">
        <Image
         src={image}
         alt="Picture of the product"
         className='self-stretch w-full aspect-square'
        />
        <h2 className="mt-1.5 ml-5 text-lg leading-10 text-white font-sans">{productName}</h2>
        <div className="flex gap-2.5 ml-5 text-xl font-semibold leading-9 whitespace-nowrap">
          <span className="grow text-[#727272] line-through ">${originalPrice}</span>
          <span className="text-[#FA4F09]">${discountedPrice}</span>
        </div>
        <div className="flex gap-1.5 items-center ml-5 text-sm font-black leading-9 text-[#ED8A19] text-[18px]">
          {Array.from({ length: rating }, (_, index) => (
            <IoStarSharp
              key={index}
              onClick={() => handleRatingClick(index + 1)}
              style={{ cursor: 'pointer' }}
              color={selectedRating >= index + 1 ? "#ED8A19" : "#727272"}
            />
          ))}
          <span className="ml-2">{selectedRating}</span>
        </div>
        <div className="mt-2 ml-5 text-sm text-[#727272]">
          {reviewCount} Reviews
        </div>
      </div>
      <button className="flex gap-3 justify-center items-center px-16 py-7 mt-9 w-full text-base font-semibold leading-7 text-center text-white border-t border-solid border-t-[blue]">
          <span className="text-[#FA4F09]">{icon}</span>
          <span>Add to cart</span>
      </button>
      </p>
    </div>
  );
};

export default ProRate;