import React from 'react'

export default function MiddleBanner() {
  return (
    <div className='flex bg-yellow-400 p-16 mx-auto max-w-7xl justify-between items-center'>
        <div className=' text-5xl text-white'>
            We Have A Team <br /> Ready To Serve You
        </div>
        <div>
        <button className="border-2 border-white rounded-full pl-4 pr-4 p-2">
        Discover More {' >'}
        </button>
        </div>
    </div>
  )
}
