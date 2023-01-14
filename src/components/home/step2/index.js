import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import video2 from "../../../assets/video/vd2.mp4"
import { motion } from 'framer-motion'
import { videoAnimation } from '../../../variants'
const Step2 = () => {
    const navigate = useNavigate()
    return (
        <div className='flex items-center justify-center h-screen bg-[#fff] relative '>
            <div className='px-12 md:px-6 lg:px-8 flex flex-col-reverse items-center justify-around  gap-2  sm:flex-col-reverse md:flex-row lg:flex-row pb-36'>
                <div className=' flex flex-col gap-2 justify-around w-full sm:w-full md:w-1/2 text-[#333] font-semibold '>
                    <span className='text-xl md:text-2xl'>
                        Step 2
                    </span>
                    <h1 className='text-[34px] sm:text-3xl md:text-5xl mb-3 w-full md:w-10/12'>
                        Make your place stand out
                    </h1>
                    <span className='text-lg md:text-xl font-normal text-black'>
                        In this step, you’ll add some of the amenities your place offers, plus 5 or more photos. Then, you’ll create a title and description.
                    </span>
                </div>
                <motion.div variants={videoAnimation} initial={"open"} animate={"closed"} className=' sm:w-full md:w-1/2 flex flex-col gap-10  '>
                    <video autoPlay preload='auto' playsInline>
                        <source src={video2} type="video/mp4" />
                    </video>
                </motion.div>

            </div>
            <div className=' absolute bottom-0 bg-[#fff] w-full '>
                <div className='bg-gray-400 w-full '>
                </div>
                <div className='flex flex-row justify-between items-center p-4 '>
                    <Link onClick={() => navigate(-1)} className="text-gray-[#333]">
                        Back
                    </Link>
                    <button onClick={() => navigate("/Step2/animities")} className='bg-gray-600 text-white px-8 py-3 rounded-lg '>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Step2