import React from 'react'

function Navhead() {
  return (
    <div className='xl:flex py-10 justify-between items-center lg:block'>
      <div className='lg:grid grid-cols-3  gap-5   '>

        <div>
            <div>
        <h1>Category</h1>

            </div>
            <select className='w-52 py-1 rounded-md'>
                <option value="">Hello</option>
                <option value="">Hello</option>
                <option value="">Hello</option>
            </select>
        </div>
        <div>

            <div>
        <h1>Sub-Category</h1>

            </div>
            <select name="" id="" className='w-52 py-1 rounded-md'>
                <option value="">Hello</option>
                <option value="">Dashnord</option>
                <option value="">Team</option>
            </select>
        </div>
        <div>
        <div>
        <h1>Countery</h1>

            </div>
            <select name="" id="" className='w-52 py-1 rounded-md'>
                <option value="">one</option>
                <option value="">Two</option>
                <option value="">Three</option>
            </select>
        </div>
        </div>

        <div>
            <h1>Search</h1>
            <input className='rounded-md py-1' type="search" placeholder='Search' />
        </div>
     </div>
  )
}

export default Navhead
