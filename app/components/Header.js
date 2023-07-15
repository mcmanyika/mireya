import { BsFacebook } from "react-icons/bs";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <div className=' bg-slate-900 bg-opacity-70'>
          <div className=' bg-slate-900 bg-opacity-70 md:flex md:justify-between md:max-w-7xl md:mx-auto p-5 uppercase font-bold text-white text-center items-center'>
            <div className=' md:w-2/4'>
                <div className=" text-left text-3xl">Mireya</div>
                <div className="text-left text-sm font-thin">Business solutions</div>
            </div>
            <div className='hidden md:flex border-b-2 border-b-transparent hover:border-b-2 p-2 hover:border-b-yellow-500'>
              <a href="#about">
                About
              </a>
            </div>
            <div className='hidden md:flex border-b-2 border-b-transparent hover:border-b-2 p-2 hover:border-b-yellow-500'>
              Services
            </div>
            <div className='hidden md:flex border-b-2 border-b-transparent hover:border-b-2 p-2 hover:border-b-yellow-500'> 
              <a href="#footer">
                Contacts
              </a>
            </div>
            <div className='hidden md:flex border-b-2 border-b-transparent hover:border-b-2 p-2 hover:border-b-yellow-500'>
              <a href="#team">
                Our Team
              </a>
            </div>
            <div className="hidden md:flex">
            <div className="flex w-full">
                <div className="flex-1"></div>
                <div className="flex">
                    {/* <div className="w-9">
                        <BsFacebook size={26} className="text-gray-400" />
                    </div>
                    <div className="w-9"><FaTwitter size={26} className="text-gray-400" /></div> */}
                    <div className="w-9"><FaLinkedin size={26} className="text-gray-400" /></div>
                </div>
            </div>
            </div>
          </div>
        </div>
  )
}

export default Header