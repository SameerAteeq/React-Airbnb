import React from 'react'
import { useNavigate } from 'react-router-dom'
import img1 from "../../assets/images/img1.webp"
import img2 from "../../assets/images/img2.webp"
import img3 from "../../assets/images/img3.webp"
import src from "../../assets/video/vd1.mp4"
const Home = () => {
    const navigate = useNavigate();

    return (
        <div className='flex items-center  h-full bg-[#fff] relative '>
            <div className='px-4 py-12 md:px-12 xl:px-14 flex items-center sm:justify-center  gap-2 flex-col sm:flex-col md:flex-row lg:flex-row h-[calc(100%-56px)] overflow-y-auto '>
                <div className='w-full sm:w-full md:w-1/2 text-[#333] font-semibold '>
                    <h1 className='text-2xl sm:text-4xl md:text-6xl'>
                        It’s easy to get started on Airbnb
                    </h1>
                </div>
                <div className=' sm:w-full md:w-1/2 flex flex-col gap-10  overflow-y-auto'>
                    <div className=' px-2 flex sm:w-full flex-row sm:gap-5 items-center justify-between md:justify-between'>
                        <div >
                            <h2 className='text-xl md:text-2xl text-[#333]  font-semibold mb-1 md:mb-3' >
                                1  Tell us about your place
                            </h2>
                            <span className='text-gray-600 text-md '>
                                Share some basic info, like where it is and how many guests can stay.
                            </span>
                        </div>

                        <div className='w-[120px] h-[120px] sm:w-[120px] sm:h-[120px]  md:w-[280px] md-h-[280px]'>
                            <img src={img1} className="w-full h-full object-contain bg-no-repeat" />
                        </div>
                    </div>
                    <hr className='border-b-1 border-[#333]/[0.5]' />
                    <div className=' px-2 flex sm:w-full flex-row sm:gap-5 items-center justify-between md:justify-between'>
                        <div>
                            <h2 className='text-xl md:text-2xl text-[#333]  font-semibold mb-1 md:mb-3' >
                                2 Make it stand out
                            </h2>
                            <span className='text-gray-600 text-md '>
                                Add 5 or more photos plus a title and description—we’ll help you out.
                            </span>
                        </div>
                        <div className='w-[120px] h-[120px] sm:w-[120px] sm:h-[120px]  md:w-[280px] md-h-[280px]'>
                            <img src={img2} className="w-full h-full object-contain bg-no-repeat" />
                        </div>
                    </div>
                    <hr className='border-b-1 border-[#333]/[0.5]' />
                    <div className=' px-2 flex sm:w-full flex-row sm:gap-5 items-center justify-between md:justify-between'>
                        <div>
                            <h2 className='text-xl md:text-2xl text-[#333]  font-semibold mb-1 md:mb-3' >
                                3 Finish up and publish
                            </h2>

                            <span className='text-gray-600 text-md '>
                                Choose if you'd like to start with an experienced guest, set a starting price, and publish your listing.
                            </span>
                        </div>
                        <div className='w-[120px] h-[120px] sm:w-[120px] sm:h-[120px]  md:w-[280px] md-h-[280px]'>
                            <img src={img3} className="w-full h-full object-contain bg-no-repeat" />
                        </div>
                    </div>
                </div>

            </div>
            <div className=' absolute bottom-0 z-10 h-10  bg-[#fff] w-full text-right'>
                <div className='bg-gray-400 w-full h-1'>
                </div>
                <div className='p-4 '>
                    <button onClick={() => navigate("/step1")} className='bg-pink-600 text-white px-8 py-3 rounded-lg w-full md:w-1/4 xl:w-1/6'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home