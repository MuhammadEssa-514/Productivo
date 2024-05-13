"use client"
import React, { useState } from "react";
import { IoStarOutline, IoStar } from "react-icons/io5";

function Rate() {
  const [rating, setRating] = useState(0); // State to track the rating value

  const handleClick = (index:any) => {
    setRating(index + 1); // Update the rating value based on the clicked star index
  };

  return (
    <div className="flex flex-col justify-center py-2.5 max-w-[342px] rounded-tl-[70px] rounded-br-[70px] custom-gradient relative">
      <div className="icons flex items-center px-9 mt-4 gap-1.5 text-orange-400 relative">
        {[...Array(5)].map((_, index) => (
          <div key={index} onClick={() => handleClick(index)}>
            {index < rating ? <IoStar /> : <IoStarOutline />}
          </div>
        ))}
        <span className="text-orange-400">
          {rating}
        </span>
      </div>
      <div className="self-center mt-5 text-base leading-6 px-9 text-neutral-300">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eius
          aspernatur eos velit. Eveniet maxime eligendi distinctio quam
          quisquam saepe iste ullam inventore! Quod voluptatum quaerat tempore
          numquam laudantium dolore?
        </p>
      </div>
      <div className="flex gap-5 mt-12 text-white whitespace-nowrap">
        <img
          loading="lazy"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26MP9f5YdlTfN-2pikGFAXSyfPfT7l-wdhA&usqp=CAU"
          className="flex-shrink-0 aspect-square w-[70px] rounded-full ml-2"
          alt="Alexandra Profile"
        />
        <div className="flex flex-col px-5 my-auto">
          <div className="text-xl font-bold leading-6">Alexandra</div>
          <div className="text-base font-light leading-6">Customer</div>
        </div>
      </div>
    </div>
  );
}

export default Rate;