
import Image from 'next/image'
import { BsFacebook } from "react-icons/bs";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

function Team() {
  
  return (
    <section id='team'>
        <div className='pt-40 md:pt-10 md:max-w-7xl mx-auto'>
            {/* <div className='text-center text-xl text-gray-400 pb-4'>
                
            </div> */}
            <div className='md:flex items-center text-center mb-5 p-10'>
                <div className='bg-gray-50 m-4'>
                    <Image src="/assets/images/p2.png" width={300} height={300} alt='' className='object-cover' />
                    <p className=' text-xl font-bold text-center text-gray-600 p-3  capitalize'>
                        Partson
                    </p>
                    <p className=' text-gray-400'>CEO</p>
                    <div className="flex p-4 pl-16 pr-16">
                        <div className="mx-auto">

                            <BsFacebook size={18} className="text-gray-400" />

                        </div>
                        <div className="mx-auto"><FaTwitter size={18} className="text-gray-400" /></div>
                        <div className="mx-auto"><FaLinkedin size={18} className="text-gray-400" /></div>
                    </div>
                </div>
                <div className=' bg-gray-50 m-4'>
                    <Image src="/assets/images/p2.png" width={300} height={300} alt='' className='object-cover' />
                    <p className=' text-xl font-bold text-center text-gray-600 p-3  capitalize'>
                        Vincent
                    </p>
                    <p className=' text-gray-400'>Technology Officer</p>
                    <div className="flex p-4 pl-16 pr-16">
                        <div className="mx-auto">
                            <BsFacebook size={18} className="text-gray-400" />
                        </div>
                        <div className="mx-auto"><FaTwitter size={18} className="text-gray-400" /></div>
                        <div className="mx-auto"><FaLinkedin size={18} className="text-gray-400" /></div>
                    </div>
                </div>
                <div className=' bg-gray-50 m-4'>
                    <Image src="/assets/images/p2.png" width={300} height={300} alt='' className='object-cover' />
                    <p className=' text-xl font-bold text-center text-gray-600 p-3  capitalize'>
                        Michael
                    </p>
                    <p className=' text-gray-400'>Marketing Director</p>
                    <div className="flex p-4 pl-16 pr-16">
                        <div className="mx-auto">
                            <BsFacebook size={18} className="text-gray-400" />
                        </div>
                        <div className="mx-auto"><FaTwitter size={18} className="text-gray-400" /></div>
                        <div className="mx-auto"><FaLinkedin size={18} className="text-gray-400" /></div>
                    </div>
                </div>
                <div className=' bg-gray-50 m-4'>
                    <Image src="/assets/images/p2.png" width={300} height={300} alt='' className='object-cover' />
                    <p className=' text-xl font-bold text-center text-gray-600 p-3  capitalize'>
                        Munashe 
                    </p>
                    <p className=' text-gray-400'>Technical Director</p>
                    <div className="flex p-4 pl-16 pr-16">
                        <div className="mx-auto">
                            <BsFacebook size={18} className="text-gray-400" />
                        </div>
                        <div className="mx-auto"><FaTwitter size={18} className="text-gray-400" /></div>
                        <div className="mx-auto"><FaLinkedin size={18} className="text-gray-400" /></div>
                    </div>
                </div>


            </div>
        </div>
    </section>
  )
}

export default Team