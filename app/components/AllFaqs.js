import React from 'react'
import Faqs from './Faqs'
import Image from 'next/image'

function AllFaqs() {
  return (
    <div className='w-full bg-gray-50'>
        <div className='md:max-w-7xl mx-auto md:p-12 bg-gray-50'>
            <div className='flex'>
                <div className='md:flex-1'>
                    <p className='p-4  capitalize text-4xl text-yellow-500 font-bold text-center'>FAQS</p>
                    <Faqs title='What services does your call center in Zimbabwe provide?' description='' />
                    <Faqs title='What are your call centers operating hours and availability?' description='' />
                    <Faqs title='What languages do your call center agents speak?' description='' />
                    <Faqs title='How do you ensure data privacy and security for customer information shared during calls' description='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllFaqs