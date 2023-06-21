

function Header() {
  return (
    <div className=' bg-slate-900 bg-opacity-70'>
          <div className=' md:flex md:justify-between md:max-w-7xl md:mx-auto p-10 uppercase font-bold text-white text-center items-center'>
            <div className=' md:w-1/3'>
                <div className=" text-left text-3xl">Mireya</div>
                <div className="text-left text-sm font-thin">Business solutions</div>
            </div>
            <div className='hidden md:flex'>
              About
            </div>
            <div className='hidden md:flex'>
              Services
            </div>
            <div className='hidden md:flex'>
              Contacts
            </div>
            <div className='hidden md:flex'>
              Our Team
            </div>
            <div className="hidden md:flex">
                <button className=" border-2 border-white rounded-full p-2 pl-5 pr-5 hover:bg-black hover:text-white"> Get A Quote</button>
            </div>
          </div>
        </div>
  )
}

export default Header