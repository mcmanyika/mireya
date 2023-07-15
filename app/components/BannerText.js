'use client';
import React, { useState } from 'react';
import Contact from './Contact'

export default function BannerText() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const handleOverlayClick = () => {
    setOverlayVisible(true);
  };

  const handleCloseOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <div className="flex items-center text-center md:w-1/3 md:mx-auto h-4/6">
        <div className='text-center text-5xl text-white font-thin'>
            <div className=' capitalize'>Your Global Partner in staffing solutions</div>
            <div className='p-2 md:p-5'>
                <button className=' border-2 border-white hover:bg-white hover:text-black md:pl-7 md:pr-7 p-2 rounded-full text-xl capitalize' onClick={handleOverlayClick}> Become a client</button>
            </div>
        </div>
        <Contact showOverlay={isOverlayVisible} onClose={handleCloseOverlay} />
    </div>
  )
}
