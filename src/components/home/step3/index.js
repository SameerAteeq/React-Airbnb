import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import video3 from "../../../assets/video/vd3.mp4"
const Step3 = () => {
    const navigate = useNavigate()
    return (
        <div className='flex items-center justify-center h-screen bg-[#fff] relative px-6 md:px-12 '>
            <div className=' md:px-6 lg:px-8 flex flex-col-reverse items-center justify-around  md:gap-8  sm:flex-col-reverse md:flex-row lg:flex-row '>
                <div className=' flex flex-col gap-4 justify-around w-full sm:w-full md:w-1/2 text-[#333] font-semibold '>
                    <span className='text-xl md:text-2xl'>
                        Step 3
                    </span>
                    <h1 className='text-[34px] text-[#222] sm:text-3xl md:text-5xl mb-3 w-full md:w-10/12'>
                        Finish up and publish
                    </h1>
                    <span className='text-lg md:text-lg font-normal text-black'>
                        Finally, you’ll choose if you'd like to start with an experienced guest, then you'll set your nightly price. Answer a few quick questions and publish when you're ready.
                    </span>
                </div>
                <div className=' sm:w-full md:w-1/2 flex flex-col gap-10  '>
                    <video autoPlay preload='auto' playsInline>
                        <source src={video3} type="video/mp4" />
                    </video>
                </div>

            </div>
            <div className=' absolute bottom-0 bg-[#fff] w-full '>
                <div className='bg-gray-400 w-full '>
                </div>
                <div className='flex flex-row justify-between items-center p-4 '>
                    <Link onClick={() => navigate(-1)} className="text-gray-[#333]">
                        Back
                    </Link>
                    <button onClick={() => navigate("/Step3/visibility")} className='bg-gray-600 text-white px-8 py-3 rounded-lg '>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Step3