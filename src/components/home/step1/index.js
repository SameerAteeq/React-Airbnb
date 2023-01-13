import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import video1 from "../../../assets/video/vd1.mp4"
const Step1 = () => {
    const navigate = useNavigate();
    console.log(video1)
    return (
        <div className='flex items-center justify-center h-full bg-[#fff] relative '>
            <div className='px-4 md:px-6 lg:px-16 flex flex-col-reverse items-center justify-center  gap-2 lg:flex-row pb-36 '>
                <div className=' flex flex-col gap-3  w-full sm:w-full md:w-1/2 text-[#333] font-semibold '>
                    <span>
                        Step 1
                    </span>
                    <h1 className='text-4xl sm:text-3xl md:text-5xl mb-3'>
                        Tell us about your place
                    </h1>
                    <span>
                        In this step, we'll ask you which type of property you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.
                    </span>
                </div>
                <div className=' sm:w-full md:w-1/2 flex flex-col gap-10  '>
                    <video autoPlay preload='auto' playsInline>
                        <source src={video1} type="video/mp4" />
                    </video>
                </div>

            </div>
            <div className=' fixed bottom-0 bg-[#fff] w-full '>
                <div className='bg-gray-400 w-full '>
                </div>
                <div className='flex flex-row justify-between items-center p-4 '>
                    <Link to={'/'} className="text-gray-[#333]">
                        Back
                    </Link>
                    <button onClick={() => navigate("/step1/structure")} className='bg-gray-600 text-white px-8 py-3 rounded-lg '>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Step1