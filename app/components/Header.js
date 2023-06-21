

function Header() {
  return (
    <div className=' bg-slate-900 bg-opacity-70'>
          <div className='flex justify-between max-w-7xl mx-auto p-10 uppercase font-bold text-white text-center items-center'>
            <div className=' w-1/3'>
                <div className=" text-left text-3xl">Mireya</div>
                <div className="text-left text-sm font-thin">Business solutions</div>
            </div>
            <div className=''>
              About
            </div>
            <div className=''>
              Services
            </div>
            <div className=''>
              Contacts
            </div>
            <div className=''>
              Our Team
            </div>
            <div>
                <button className=" border-2 border-white rounded-full p-2 pl-5 pr-5"> Get A Quote</button>
            </div>
          </div>
        </div>
  )
}

export default Header