import React from 'react';
import TableData from './Tabledata.json';


const Table = () => {
  
  return (
    <div className="w-full custom-scrollbar">
      <table className="border border-gray-800 text-[10px] text-gray-700 w-full">
        <thead className='bg-blue-100 text-gray-500'>
          <tr>
            <th className="text-start">Product</th>
            <th className="px-6 py-1">Unit</th>
            <th className="px-6 py-1">Weight</th>
            <th className="px-6 py-1">Price</th>
            <th className="px-6 py-1">This Month</th>
            <th className="px-6 py-1">Last Month</th>
            <th className="px-6 py-1">% Change</th>
          </tr>
        </thead>
        <tbody>
          {TableData.map((item, index) => (
            <tr key={index} className='hover:bg-orange-100 text-center'>
              <td className="px-2 py-2 text-start">{item.product}</td>
              <td className="px-2 py-2">{item.unit}</td>
              <td className="px-2 py-2">{item.weight}</td>
              <td className="px-2 py-2">{item.price}</td>
              <td className="px-2 py-2">{item.thisMonth}</td>
              <td className="px-2 py-2">{item.lastMonth}</td>
              <td className="px-2 py-2">{item.change}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
