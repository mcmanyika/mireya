import { useGlobalState, setGlobalState } from '../store'
import { FiArrowRight } from "react-icons/fi";

export default function MiddleBanner() {
  const openNav = () => {
    setGlobalState('isOpen', true);
};
  return (
    <div className='flex bg-yellow-400 p-16 mx-auto max-w-7xl justify-between items-center'>
        <div className='text-lg md:text-5xl text-white'>
            We Have A Team <br /> Ready To Serve You
        </div>
        <div className='text-lg'>
        <button  onClick={openNav} className="border-2 border-white hover:bg-yellow-500 hover:text-white rounded-full pl-4 pr-4 p-2 flex items-center">
        <span className="mr-1 text-lg">Discover More</span>
        <FiArrowRight size={15} />
      </button>
        </div>
    </div>
  )
}
