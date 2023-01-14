import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StructureData } from '../../../../data'
import { motion, variants } from 'framer-motion'
import { animation } from '../../../../variants'
const Animities = () => {
    const navigate = useNavigate();

    return (
        <div className='flex h-full flex-col justify-center md:justify-start items-center relative'>
            <motion.div initial={"hidden"} animate={"show"} variants={animation} className='flex flex-col justify-center md:justify-start  items-start gap-5 pt-[50px] p-3 md:px-[20px] pb-[100px]  h-full  '>
                <h1 className='text-[#333] text-3xl md:text-4xl '>
                    Tell guests what your place has to offer
                </h1>
                <span className='flex text-xl items-start' >
                    You can add more amenities after you publish your listing.
                </span>
                <div className='flex flex-row justify-center md:justify-start items-start flex-wrap gap-4 max-w-[700px]'>
                    {StructureData?.slice(0, 8)?.map((item) => (
                        <div key={item.id} className="">
                            <div className='px-4 flex flex-col flex-wrap items-start justify-center border-[2px] w-[160px] h-[100px] sm:w-[220px] md:w-[200px] hover:border-[#333] rounded-xl cursor-pointer '>
                                <span className='text-3xl mb-1'>{item.icon}</span>
                                <span>{item.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <span className='flex items-start text-xl text-[#141313] font-semibold' >
                    Do you have any standout amenities?
                </span>
                <div className='flex flex-row justify-center md:justify-start items-start flex-wrap gap-4 max-w-[700px]'>
                    {StructureData?.slice(0, 8)?.map((item) => (
                        <div key={item.id} className="">
                            <div className='px-4 flex flex-col flex-wrap items-start justify-center border-[2px] w-[160px] h-[100px] sm:w-[220px] md:w-[200px] hover:border-[#333] rounded-xl cursor-pointer '>
                                <span className='text-3xl mb-1'>{item.icon}</span>
                                <span>{item.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <span className='flex text-xl items-start text-[#141313] font-semibold' >
                    Do you have any of these safety items?
                </span>
                <div className='flex flex-row justify-center sm:justify-start items-start flex-wrap gap-4 max-w-[700px]'>
                    {StructureData?.slice(0, 4)?.map((item) => (
                        <div key={item.id} className="">
                            <div className='px-4 flex flex-col flex-wrap items-start justify-center border-[2px] w-[160px] h-[100px] sm:w-[220px] md:w-[200px] hover:border-[#333] rounded-xl cursor-pointer '>
                                <span className='text-3xl mb-1'>{item.icon}</span>
                                <span>{item.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
            <div className=' fixed bottom-0 right-0 left-0 bg-[#fff] w-full '>
                <div className='bg-gray-400 w-full '>
                </div>
                <div className='flex flex-row justify-between items-center p-4 '>
                    <Link onClick={() => navigate(-1)} className="text-gray-[#333]">
                        Back
                    </Link>
                    <button onClick={() => navigate("/step2/photos")} className='bg-gray-600 text-white px-8 py-3 rounded-lg '>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Animities