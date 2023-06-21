import React from 'react'

export default function BannerText() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }} className='w-1/3 mx-auto'>
        <div style={{ textAlign: 'center' }} className=' text-5xl text-white font-thin'>
            <div className=' text-green-800 text-xl font-thin uppercase pb-5'>Call center services</div>
            <div className=' capitalize'>Your Global Partner in customer service</div>
            <div className='p-5'>
                <button className=' border-2 border-white pl-7 pr-7 p-2 rounded-full text-xl capitalize'> Let us quote you</button>
            </div>
        </div>
    </div>


  )
}
