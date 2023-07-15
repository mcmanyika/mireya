import { Tb24Hours } from "react-icons/tb";
import { SlSupport } from "react-icons/sl";

const Content = () => {
  return (
    <section id="about">
        <div className=' md:max-w-7xl mx-auto  p-16 pt-5 bg-white'>
            <div className='pt-10  md:flex'>
                <div className='md:w-2/4'>
                    <p className='w-full capitalize text-3xl text-yellow-500 font-bold'>about us</p>
                    <p className='leading-loose font-thin text-xl pt-5'>
                    We are a global remote staffing company that specializes in providing comprehensive and customized solutions to businesses of all sizes. With our understanding of the remote work landscape and a commitment to excellence, we empower organizations to build efficient and productive teams while leveraging the benefits of remote staffing.
                    </p>
                </div>
                <div className="md:w-1/4">
                        <div className="pl-24">
                            <SlSupport size={80} className="text-yellow-400" />
                        </div>
                        <p className="mt-2 leading-loose font-thin text-lg pt-2 pl-5">
                            Effective problem-solving, ticket management, and remote assistance
                        </p>
                        <p className="p-5">
                            <button className=" bg-yellow-300 p-2 rounded-full text-sm pl-4 pr-4"> More</button>
                        </p>
                </div>
                <div className="md:w-1/4">
                    <div className="pl-24">
                        <Tb24Hours size={80} className="text-yellow-400" />
                    </div>
                    <p className="mt-2 leading-loose font-thin text-lg pt-2 pl-5">
                        24/7 assistance, multi-channel support, complaint resolution, and technical troubleshooting
                    </p>
                    <p className="p-5">
                        <button className=" bg-yellow-300 p-2 rounded-full text-sm pl-4 pr-4"> More</button>
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Content