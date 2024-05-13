import React from 'react'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { MdOutlineMessage ,MdMosque } from "react-icons/md";
import { FaRegCalendarCheck,FaUsers } from "react-icons/fa";
let headeritem=[
    {
        id: 1,
        icon: <MdOutlineMessage/>,
        para: 'Data Points',
        number1: `100,231`,
        number2: `+11.01%`,
        icon1: <FaArrowTrendUp />,
      },
    {
        id: 2,
        icon: <MdMosque/>,
        para: 'Restaurants',
        number1: `100,231`,
        number2: `+11.01%`,
        icon1: <FaArrowTrendUp />,
      },
    {
        id: 3,
        icon: <FaRegCalendarCheck/>,
        para: 'Posts',
        number1: `9,667`,
        number2: `+11.01%`,
        icon1: <FaArrowTrendUp />,
      },
    {
        id: 4,
        icon: <FaUsers/>,
        para: 'Products',
        number1: `4,421`,
        number2: `+11.01%`,
        icon1: <FaArrowTrendUp />,
      },   
]
function Head() {
  return (
    <div className='lg:grid grid-cols-4 gap-5 py-5'>
      {headeritem.map((item) => (
  <div key={item.id} className="flex gap-5 items-center bg-white  p-5 rounded-lg  ">
    <div className='bg-[blue] text-white text-2xl p-3 rounded-full'>
      {item.icon}
    </div>
    <div>
      <h1 className=" text-blue-800">{item.para}</h1>
      <p>{item.number1}</p>
      <div className='flex gap-2 items-center text-green-700'>
      <p>{item.number2}</p>
      <div className=''>{item.icon1}</div>
      </div>
    </div>
  </div>
))}
    </div>
  )
}
export default Head
