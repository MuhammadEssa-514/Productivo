"use client"
import React, { useState } from 'react';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import { BiSolidDownArrow, BiSolidUpArrow} from "react-icons/bi";
// import { BiSolidUpArrow } from "react-icons/bi";
{/* <BiSolidUpArrow /> */}

const faqsData = [
  {
    question: "What is vaping?",
    answer:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora velit perspiciatis, adipisci suscipit commodi eligendi minima corrupti nobis asperiores officiis.",
  },
  {
    question: "Are vaping products safe?",
    answer:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora velit perspiciatis, adipisci suscipit commodi eligendi minima corrupti nobis asperiores officiis.",
  },
  {
    question: "What ingredients are in e-liquids?",
    answer:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora velit perspiciatis, adipisci suscipit commodi eligendi minima corrupti nobis asperiores officiis.",
  },
  {
    question: "How do I choose the right nicotine strength?",
    answer:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora velit perspiciatis, adipisci suscipit commodi eligendi minima corrupti nobis asperiores officiis.",
  },
  {
    question: "What are the different types of vaping devices?",
    answer:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora velit perspiciatis, adipisci suscipit commodi eligendi minima corrupti nobis asperiores officiis.",
  },
  // More questions...
];

function CustomDisclosure({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDisclosure = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pt-6">
      <div className="flex w-full items-start justify-between text-left text-white">
        <span className="text-base text-white text-[10px]" onClick={toggleDisclosure}>{question}</span>
        <span className="ml-6 flex h-7 items-center text-white">
          {isOpen ? (


            <BiSolidUpArrow className="h-3 w-3" onClick={toggleDisclosure} />
          ) : (
            <BiSolidDownArrow className="h-3 w-3" onClick={toggleDisclosure} />
          )}
        </span>
      </div>
      {isOpen && (
        <div className="mt-2 pr-12">
          <p className="text-base leading-7 text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
}

function Faqs() {
  return (
    <div className="bg-[black] w-full">
      <div className="mx-auto max-w-5xl sm:py-32 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-4xl divide-y divide-white/20">
            <div className=''>
          <h2 className="text-[40px]
          tracking-tight text-white text-center pb-9">FAQS</h2>
          <dl className="space-y-5 border border-stone-700 divide-y divide-white/20 p-5 text-[12px]">
            {faqsData.map((faq, index) => (
              <CustomDisclosure key={index} question={faq.question} answer={faq.answer} />
            ))}
          </dl>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;

