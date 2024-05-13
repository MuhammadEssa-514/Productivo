"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import img1 from '@/public/picture/c1.png';
import img2 from '@/public/picture/c2.png';
import img3 from '@/public/picture/c3.png';
import img4 from '@/public/picture/c4.png';
import img5 from '@/public/picture/c5.png';
import img6 from '@/public/picture/c6.png';
import img7 from '@/public/picture/c7.png';
import img8 from '@/public/picture/c8.png';
import img9 from '@/public/picture/c9.png';
import { CiSearch } from "react-icons/ci";

function Categorieitems() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    const items = [
        {
            id: '1',
            categoriesimg: img1,
            heading: 'Kombucha'
        },
        {
            id: '2',
            categoriesimg: img2,
            heading: 'Soda'
        },
        {
            id: '3',
            categoriesimg: img3,
            heading: 'Energy'
        },
        {
            id: '4',
            categoriesimg: img4,
            heading: 'Tea'
        },
        {
            id: '5',
            categoriesimg: img5,
            heading: 'Coffee'
        },
        {
            id: '6',
            categoriesimg: img6,
            heading: 'Plant-based'
        },
        {
            id: '7',
            categoriesimg: img7,
            heading: 'Juice'
        },
        {
            id: '8',
            categoriesimg: img8,
            heading: 'Sports Drink'
        },
        {
            id: '9',
            categoriesimg: img9,
            heading: 'Wine'
        },
    ];

    const handleSearch = (e:any) => {
        setSearchTerm(e.target.value);
        const filtered = items.filter(item =>
            item.heading.toLowerCase().includes(e.target.value.toLowerCase())
        );

        setFilteredItems(filtered);
    };

    const itemsToDisplay = searchTerm.length > 0 ? filteredItems : items;

    return (
        <>
            <div className='flex items-center lg:w-[407px] h-[56.92px] md:w-full bg-white mb-6 gap-2 rounded-lg m-auto px-2'>
                <CiSearch className='text-[19px]'/>
                <input className='text-[19px] border-none outline-none w-[407px] h-[56.92px]' type="search" placeholder='Search' onChange={handleSearch} />
            </div>
            
            <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 lg:gap-[2%]  '>
    {itemsToDisplay.map(item => (
        <div key={item.id} className='bg-white rounded-lg lg:m-0 md:m-2 sm:m-3'>
            <Image src={item.categoriesimg } alt={item.heading} className='w-full' />
            <p className='text-center text-[28px] font-semibold py-3'>{item.heading}</p>
        </div>
    ))}
</div>


        </>
    );
}

export default Categorieitems;
