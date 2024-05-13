import React from 'react';
import { RiMessage2Line } from "react-icons/ri";
import { IoIosNotificationsOutline ,IoIosArrowDown } from "react-icons/io";
import profile from '../../public/picture/5cf6a10be574b54b71cf418fa3466bb6.jpeg';
import Image from 'next/image';

// const Heading = ({ text, styles }) => {
//   return (
//     <h1 className={styles}>
//       {text}
//     </h1>
//   );
// };

function Navbar() {
  return (
    <div className='flex justify-between items-center h-[83px]'>
      {/* <div>
        <Heading text="Dashbord" styles="" />
      </div> */}
      <div className='flex gap-5 items-center'>
        <div className='text-2xl flex gap-5'>
          <RiMessage2Line />
          <IoIosNotificationsOutline />
        </div>
        <div className='flex items-center gap-3'>
          <div>
            <Image
              src={profile}
              alt="Picture of the author"
              width={40}
              height={40}
              className='rounded-full h-[40px] w-[40px]'
            />
          </div>
          <div>
            <h3 className='text-[16px]'>Jerome Bell</h3>
            <p className='text-[12px]'>Admin</p>
          </div>
        </div>
        <div>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
