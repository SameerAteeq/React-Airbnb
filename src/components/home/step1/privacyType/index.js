import React, { useEffect, useState } from 'react'
import { motion, variants } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { PrivacyTypeData } from '../../../../data'
import { animation } from '../../../../variants'
const PrivacyType = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(PrivacyTypeData)
    }, [])
    const navigate = useNavigate()
    const clickHandle = (id) => {
        // const selectedCount = data?.filter((i) => i.selected).length;
        // if (selectedCount === 1) {
        //     return
        // }
        setData(data?.map((item) => (
            item.id === id
                ? { ...item, selected: !item.selected } : item
        )))
    }


    return (
        <div className='flex flex-col h-full justify-center items-center relative'>
            <motion.div initial={"hidden"} animate={"show"} variants={animation} className='w-[300px] sm:w-[450px] md:w-[640px]  flex flex-col items-start  gap-10 pt-[50px]   md:px-[20px]  pb-[92px]  '>
                <h1 className='text-[#333] text-2xl md:text-3xl font-semibold'>
                    What type of place will guests have?
                </h1>
                <div className='flex flex-row justify-center items-center flex-wrap gap-4'>
                    {data.map((item) => (
                        <div key={item.id} onClick={() => clickHandle(item.id)} className="">
                            <div data-id={item.id} className={` ${item.selected ? "border border-[#333] rounded-xl" : ""} flex flex-row gap-1 flex-wrap items-center justify-between px-4 border-[2px] w-[300px] sm:w-[450px] md:w-[600px] h-[110px] hover:border-[#333] rounded-xl cursor-pointer `}>
                                <div className='flex flex-col w-11/12 md:w-9/12 '>
                                    <span className='text-lg sm:text-lg md:text-xl text-[#333] font-semibold'>{item.title}</span>
                                    <span className=' text-md md:text-base text-gray-600'>{item.text}</span>
                                </div>
                                <span className='text-lg md:text-3xl mb-1'>{item.icon}</span>
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
                    <button onClick={() => navigate("/step1/location")} className={`${data?.selected ? "opacity-[0.3] cursor-not-allowed" : ""} bg-gray-600 text-white px-5 py-2 md:px-8 md:py-3 rounded-lg `}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PrivacyType;