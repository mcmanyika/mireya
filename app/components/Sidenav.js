import React, { useState } from 'react';
import { useGlobalState, setGlobalState } from '../store'
import { GiCancel } from "react-icons/gi";

const Sidenav = () => {
  
  const closeNav = () => {
    setGlobalState('isOpen', false);
  };

  return (
    <div>
      <div className=" bg-white">
        <GiCancel
          size={40}
          className="text-yellow-400 absolute top-2  cursor-pointer"
          onClick={closeNav}
        />
      </div>
    </div>
  );
};

export default Sidenav;
