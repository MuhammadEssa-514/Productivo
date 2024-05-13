import React, { useEffect } from "react";
import { TiSocialTwitter } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Slider() {
  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function nextSlide() {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }

    setInterval(nextSlide, 3000);
  }, []);
  return (

      <div className="slider">
        <div
          className="slide h-screen flex flex-col justify-center items-center sm:flex-row sm:justify-between px-[70px]"
          style={{ backgroundImage: "url('/picture/slider1.jpg')"}}
        >
          <div className="social-icon-bg px-3 py-1 md:py-4 flex gap-3 sm:gap-10 rounded-[12px] sm:flex-col justify-center sm:mt-14">
            <FaYoutube className="social-icon-text-bg text-white text-[20px] p-1 sm:text-[40px] sm:p-2  rounded-full" />
            <FaInstagram className="social-icon-text-bg text-white text-[20px] p-1 sm:text-[40px] sm:p-2 rounded-full" />
            <TiSocialTwitter className="social-icon-text-bg text-white text-[20px] p-1 sm:text-[40px] sm:p-2 rounded-full" />
          </div>
          <div className="content text-center text-white">
                <h1 className="text-[25px] lg:text-[35px] md:text-[30px] font-semibold tracking-wider md:text-left">
                 ELEVATE YOUR SENSES <br /> 
                 <span className="text-[40px] bg-gradient-to-r text-transparent bg-clip-text from-blue-500 to-pink-500 italic md:inline">with </span>
                 <span className="font-extrabold text-[25px] lg:text-[50px] md:text-[30px]">OUR PRODUCTS</span>
                 </h1>
                <button className="btn-border">
                   Shop Now
                </button>
           </div>
        </div>

        <div
          className="slide h-screen flex flex-col justify-center items-center sm:flex-row sm:justify-between px-[70px]"
          style={{ backgroundImage: "url('/picture/slider2.jpg')"}}
        >
          <div className="social-icon-bg px-3 py-1 md:py-4 flex gap-3 sm:gap-10 rounded-[12px] sm:flex-col justify-center sm:mt-14">
            <FaYoutube className="social-icon-text-bg text-white text-[20px] p-1 sm:text-[40px] sm:p-2  rounded-full" />
            <FaInstagram className="social-icon-text-bg text-white text-[20px] p-1 sm:text-[40px] sm:p-2 rounded-full" />
            <TiSocialTwitter className="social-icon-text-bg text-white text-[20px] p-1 sm:text-[40px] sm:p-2 rounded-full" />
          </div>
          <div className="content text-center text-white">
                <h1 className="text-[25px] lg:text-[35px] md:text-[30px] font-semibold tracking-wider md:text-left">
                 ELEVATE YOUR SENSES <br /> 
                 <span className="text-[40px] bg-gradient-to-r text-transparent bg-clip-text from-blue-500 to-pink-500 italic md:inline">with </span>
                 <span className="font-extrabold text-[25px] lg:text-[50px] md:text-[30px]">OUR PRODUCTS</span>
                 </h1>
                <button className="btn-border">
                   Shop Now
                </button>
           </div>
        </div>

        <div
          className="slide h-screen flex flex-col justify-center items-center sm:flex-row sm:justify-between px-[70px]"
          style={{ backgroundImage: "url('/picture/slider3.jpg')"}}
        >
          <div className="social-icon-bg px-3 py-1 md:py-4 flex gap-3 sm:gap-10 rounded-[12px] sm:flex-col justify-center sm:mt-14">
            <FaYoutube className="social-icon-text-bg text-white text-[20px] p-1 sm:text-[40px] sm:p-2  rounded-full" />
            <FaInstagram className="social-icon-text-bg text-white text-[20px] p-1 sm:text-[40px] sm:p-2 rounded-full" />
            <TiSocialTwitter className="social-icon-text-bg text-white text-[20px] p-1 sm:text-[40px] sm:p-2 rounded-full" />
          </div>
          <div className="content text-center text-white">
                <h1 className="text-[25px] lg:text-[35px] md:text-[30px] font-semibold tracking-wider md:text-left">
                 ELEVATE YOUR SENSES <br /> 
                 <span className="text-[40px] bg-gradient-to-r text-transparent bg-clip-text from-blue-500 to-pink-500 italic md:inline">with </span>
                 <span className="font-extrabold text-[25px] lg:text-[50px] md:text-[30px]">OUR PRODUCTS</span>
                 </h1>
                <button className="btn-border">
                   Shop Now
                </button>
           </div>
        </div>
      </div>
  
  );
}
