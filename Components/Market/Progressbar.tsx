import React from 'react';

function Progressbar({ label1, label2, label3 } :any) {
  const progressBarFillStyles = [
    { width: '74%', backgroundColor: 'red' },
    { width: '52%', backgroundColor: 'red' },
    { width: '36%', backgroundColor: 'red' }
  ];

  return (
    <div className="mb-4">

      <div className=" mb-2">
        <h2 className='text-[12px]'>Captain Kombucha {label1}</h2>

        <div className='flex items-center gap-2'>
        <div className="relative bg-gray-200 rounded-lg overflow-hidden h-2 w-60">
          <div className="absolute left-0 top-0 bottom-0" style={progressBarFillStyles[0]}></div>
        </div>
        <span className='text-[13px]'>{parseInt(progressBarFillStyles[0].width) || 0}%</span>
        </div>

      </div>

      <div className=" mb-2">
        <h2 className='text-[12px]'>Empress {label2}</h2>

        <div className='flex items-center gap-2'>
        <div className="relative bg-gray-200 rounded-lg overflow-hidden h-2 w-60">
          <div className="absolute left-0 top-0 bottom-0" style={progressBarFillStyles[1]}></div>
        </div>
        <span className='text-[13px]'>{parseInt(progressBarFillStyles[1].width) || 0}%</span>
        </div>

      </div>

      <div className=" mb-2">
        <h2 className='text-[12px]'>Surf Kombucha {label3}</h2>

        <div className='flex items-center gap-2'>
        <div className="relative bg-gray-200 rounded-lg overflow-hidden h-2 w-60">
          <div className="absolute left-0 top-0 bottom-0" style={progressBarFillStyles[2]}></div>
        </div>
        <span className='text-[13px]'>{parseInt(progressBarFillStyles[2].width) || 0}%</span>
        </div>

      </div>

    
    </div>
  );
}

export default Progressbar;
