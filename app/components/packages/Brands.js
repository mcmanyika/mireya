import Image from 'next/image'

function Brands() {
  return (
    <div className='w-full p-10'>
        <div className='w-7xl mx-auto flex flex-row justify-center'>
            <div className='justify-center'>
                <div className=' text-4xl w-full text-center p-10 uppercase font-semibold'>Tools we support
                </div>
                <Image src='/assets/images/brands.png' alt='' width={1100} height={400} />
            </div>
        </div>
    </div>
  )
}

export default Brands