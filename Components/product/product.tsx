"use client";
import React, { useState } from "react";
import Image from "next/image";
import productImage1 from "..//..//public/picture/product 1.png";
import productImage2 from "..//..//public/picture/product 2.png";
import { IoIosStar } from "react-icons/io";

const pro = [
  {
    id: 1,
    image: productImage1,
    heading: "SunnRask \n Okologisk",
    para: "Tights.No",
    rating: 0,
  },
  {
    id: 2,
    image: productImage2,
    heading: "Berit Kombucha ingefaer 330 ml",
    para: "Tights.No",
    icon: <IoIosStar />,
  },
  {
    id: 3,
    image: productImage2,
    heading: "Voelkel Okologisk Kombucha 0,75 L",
    para: "Tights.No",
    icon: <IoIosStar />,
  },
  {
    id: 4,
    image: productImage2,
    heading: "Captain Kombucha Pineapple Peach",
    para: "Tights.No",
    icon: <IoIosStar />,
  },

  {
    id: 5,
    image: productImage2,
    heading: "Captain Kombucha California raspberry",
    para: "Tights.No",
    icon: <IoIosStar />,
  },
];

const Product = () => {
  const [ratings, setRatings] = useState(pro.map((item) => item.rating));

  const handleRating = ({index, rating}:any) => {
    const newRatings = [...ratings];
    newRatings[index] = rating;
    setRatings(newRatings);
  };

  return (
    <div className=" flex flex-wrap justify-around ">
      {pro.map((item, index) => (
        <div
          key={item.id}
          className="h-[296px] w-[181px] border-gray-300 border-b-2 border-r-2 ]"
        >
          <div className="flex justify-center">
            <Image
              src={item.image}
              alt="Product Image"
              width={73}
              height={114}
              className="py-[15px]"
            />
          </div>
          <div className="p-3 leading-5">
            <h1 className="font-bold text-[11px] ">{item.heading}</h1>
            <p className="text-[9px] font-bold">{item.para}</p>
            <div className="for-starts flex text-gray-300 ">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <IoIosStar
                    key={i}
                    className={ratings[index] as any > i ? "text-yellow-300" : ""}
                    onClick={() => handleRating(index, i + 1)}
                  />
                ))}
              </div>
              {/* for starts */}
              <div className=" ">
                {ratings[index] as any > 0 && (
                  <p className="text-xs text-gray-500">{ratings[index]}</p>
                )}
              </div>
            </div>
            <pre className="font-extrabold text-gray-400">
              NOK <span className="text-red-500">25000</span>
            </pre>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;