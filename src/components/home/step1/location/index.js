import React from 'react'
import { motion, variants } from 'framer-motion'
import { animation, MapTransition } from '../../../../variants'
import { Link, useNavigate } from 'react-router-dom'
import map from "../../../../assets/images/map.jpg"
import { MdLocationOn } from 'react-icons/md'
const Location = () => {
    const navigate = useNavigate();
    return (
        <div className='md:flex flex-col h-full justify-center items-center relative w-full '>
            <motion.div initial={"hidden"} animate={"show"} variants={animation} className='w-full  md:w-[650px]  flex flex-col items-start  gap-3 pt-[50px]   md:px-[20px]  pb-[92px]  '>
                <h1 className='text-[#333] text-2xl md:text-3xl font-semibold px-8 md:px-0 '>
                    Where's your place located?
                </h1>
                <span className='px-8 md:px-0 text-base md:text-lg text-gray-700 mb-8'>
                    Your address is only shared with guests after they’ve made a reservation.
                </span>
                <div className='w-full h-[280px] relative '>
                    <motion.div initial={"open"} animate={"closed"} variants={MapTransition} className='w-full h-[280px]'>
                        <img src={map} className="h-full w-full object-center rounded-xl" />
                    </motion.div>
                    <div className='flex items-center justify-center absolute top-10 px-2 w-full'>
                        <div className='border-2 w-11/12 focus-within:border-black flex  bg-white flex-row items-center py:3 px-2 md:py-4 md:px-2 rounded-full focus-within:rounded-xl'>
                            <MdLocationOn className='text-xl md:text-4xl' />
                            <input type="text" placeholder='Enter your address' className='placeholder-[#333]  w-full outline-none py-2 px-2' />
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className=' mt-8 fixed bottom-0 right-0 left-0 bg-[#fff] w-full '>
                <div className='bg-gray-400 w-full h-1 '>
                </div>
                <div className='flex flex-row justify-between items-center p-3 md:p-4 '>
                    <Link onClick={() => navigate(-1)} className="text-gray-[#333]">
                        Back
                    </Link>
                    <button onClick={() => navigate("/step1/floor-plan")} className='bg-gray-600 text-white px-5 py-2 md:px-8 md:py-3 rounded-lg '>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Location