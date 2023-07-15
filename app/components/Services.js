import React from 'react'

function Services() {
  return (
    <div className=' bg-gray-50 p-4'>
        <div className='max-w-7xl mx-auto'>
            <div className='w-full text-4xl md:text-center p-5 text-yellow-500'>
                Our Services
            </div>
            <div className='flex flex-col md:flex-row mx-auto text-center p-5 text-3xl'>
                <div className='mb-5 md:mr-5'>
                    <div className='font-thin w-52 md:w-full'>Administrative Assistance</div>
                    <div></div>
                    <div></div>
                </div>

                <div className='mb-5 md:mr-5'>
                    <div className='font-thin w-52 md:w-full'>Dedicated Afterhours Support</div>
                    <div></div>
                    <div></div>
                </div>

                <div className='mb-5 md:mr-5'>
                    <div className='font-thin w-52 md:w-full'>Documentation Services</div>
                    <div></div>
                    <div></div>
                </div>

                <div className='mb-5'>
                    <div className='font-thin w-52 md:w-full'>Helpdesk Technicians</div>
                    <div></div>
                    <div></div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Services