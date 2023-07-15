'use client';
import React, { useState } from 'react';

import { BsChevronDown } from "react-icons/bs";

function Faqs({title, description}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-2  rounded-md m-2 drop-shadow-sm">
        <div className=' bg-white cursor-pointer p-2 rounded-sm'>
        <div className="text-gray-500 justify-between flex font-thin text-lg rounded" onClick={handleToggle}>
          <span className='pr-2'>{title}</span>
          <span>
            <BsChevronDown size={15} />
          </span>
        </div>
        </div>
        <div className={`transition-all duration-500 text-gray-500 font-thin text-lg text-left p-2 ${isOpen ? 'block' : 'hidden'}`}>
            {description}
      </div>
    </div>
  );
}

export default Faqs;
