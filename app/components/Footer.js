import { BsFacebook } from "react-icons/bs";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { slideInDown } from 'react-animations';

function Footer() {
  return (
    <slideInDown>
        <section id="footer">
            <div className=" bg-gray-100 h-22 p-0">
                <div className='w-full md:max-w-7xl mx-auto p-2'>
                    <div className="w-full md:flex">
                        <div className="hidden md:flex pt-4">
                            <div className="w-full p-2 text-gray-400 font-thin">Follow Mireya </div>
                            {/* <div className="w-9 p-2">
                                <BsFacebook size={26} className="text-gray-400" />
                            </div>
                            <div className="w-9 p-2"><FaTwitter size={26} className="text-gray-400" /></div> */}
                            <div className="w-9 p-2"><FaLinkedin size={26} className="text-gray-400" /></div>
                            
                            <div className="w-full p-2 pl-20 text-gray-400 font-thin">
                                <div className="font-bold w-40">
                                    Quick Links
                                </div>
                                <div>
                                    <a href="#about">
                                    About Us
                                    </a>
                                </div>
                                <div>
                                    <a href="#services">
                                    Services
                                    </a>
                                </div>
                                <div>
                                    <a href="#team">
                                    Our Team
                                    </a>
                                </div>
                            </div>
                            
                            <div className="w-full p-2  text-gray-400 font-thin">
                                <div className=" font-bold">
                                    Contact us On
                                </div>
                                <div>
                                    1-800 8755 4545
                                </div>
                                <div>
                                    marketing@mireya.online
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="w-full pt-10 text-center items-center text-sm font-thin text-gray-400">Copyright © 2023 Mireya. All rights reserved.</div>
                </div>
            </div>
        </section>
    </slideInDown>
  )
}

export default Footer