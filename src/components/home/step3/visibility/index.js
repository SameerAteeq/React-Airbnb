import React, { useState } from 'react'
import { motion, variants } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { PrivacyTypeData, visibilityData } from '../../../../data'
import { animation } from '../../../../variants'
const Visibility = () => {
    const [selected, setSelected] = useState(false);
    const navigate = useNavigate()
    const clickHandle = () => {
        setSelected(!selected)
    }

    return (
        <div className='flex flex-col h-full justify-center items-center relative'>
            <motion.div initial={"hidden"} animate={"show"} variants={animation} className='w-[300px] sm:w-[450px] md:w-[640px]  flex flex-col items-start  gap-5 pt-[50px]   md:px-[20px]  pb-[92px]  '>
                <h1 className='text-[#333] text-2xl md:text-3xl font-semibold'>
                    Choose who to welcome for your first reservation
                </h1>
                <span className='text-xl text-gray-400'>
                    After your first guest, anyone can book your place. Learn more
                </span>
                <div className='flex flex-row justify-start items-start flex-wrap gap-4 '>
                    {visibilityData?.map((item) => (
                        <div key={item.id} onClick={clickHandle} className="flex items-center">
                            <div className={` ${!selected === item.selected ? "border-[#333] rounded-xl" : ""} flex flex-row gap-3 justify-start items-start p-2 border-[2px] w-[300px] sm:w-[450px] md:w-[600px] h-[110px] hover:border-[#333] rounded-xl cursor-pointer `}>
                                <div>
                                    <input type="radio" name='radio' className=" rounded-full h-4 w-4 border border-gray-300 bg-white focus:bg-gray-800 checked:border-gray-600 focus:outline-none  cursor-pointer" />
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-lg sm:text-lg md:text-xl text-[#333] font-semibold'>{item.title}</span>
                                    <span className=' text-sm md:text-base text-gray-600'>{item.text}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
            <div className=' mt-8 fixed bottom-0 right-0 left-0 bg-[#fff] w-full '>
                <div className='bg-gray-400 w-full h-1 '>
                </div>
                <div className='flex flex-row justify-between items-center p-3 md:p-4 '>
                    <Link onClick={() => navigate(-1)} className="text-gray-[#333]">
                        Back
                    </Link>
                    <button onClick={() => navigate("/step3/price")} className='bg-gray-600 text-white px-5 py-2 md:px-8 md:py-3 rounded-lg '>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Visibility