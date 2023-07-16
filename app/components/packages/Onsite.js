import { IoCheckmarkSharp } from "react-icons/io5";

function Onsite({title, title2}) {
  return (
    <div className="bg-black">
        <div className='flex  text-white max-w-7xl mx-auto justify-between align-middle  items-center p-5'>
        <div className=" w-60 text-2xl">{title}</div>
        <div><IoCheckmarkSharp size={40} className=" text-white"/></div>
        <div><IoCheckmarkSharp size={40} className=" text-white"/></div>
        <div><IoCheckmarkSharp size={40} className=" text-white"/></div>
        <div><IoCheckmarkSharp size={40} className=" text-white"/></div>
      </div>
    </div>
  )
}

export default Onsite;