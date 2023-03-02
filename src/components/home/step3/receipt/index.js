import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";
import { animation, videoAnimation } from "../../../../variants";
import { BsCalendarEvent, BsClipboardCheck } from "react-icons/bs";
import image from "../../../../assets/images/receiptimg.jpg";
import { AiFillStar } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import axios from "axios";
const Receipt = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getRoom = async () => {
      const resp = await axios.get(`http://localhost:8000/room/${id}`);
      console.log(resp, "res");
      setData(resp?.data);
    };
    getRoom();
  }, []);
  console.log(data, "data");

  return (
    <div className="flex flex-col h-full justify-center items-center relative ">
      <motion.div
        initial={"open"}
        animate={"closed"}
        variants={videoAnimation}
        className="px-3 justify-center flex flex-col items-start  gap-1 pt-[50px] sm:px-7  md:px-[10px] md:w-[700px]  pb-[98px]  "
      >
        <h1 className="text-[#333] text-2xl md:text-5xl font-semibold mb-4">
          Review your listing
        </h1>
        <span className="text-xl text-gray-700">
          Here's what we'll show to guests. Make sure everything looks good.
        </span>
        <div className="p-2 flex flex-col lg:flex-row justify-between items-center md:items-start  gap-8 ">
          <div className="w-full md:w-[80%] lg:w-[380px] bg-[#ffff] px-4 py-7 rounded-xl flex flex-col justify-start items-start  h-[500px] shadow-xl gap-2">
            <img
              src={data?.images?.[0]}
              alt="..."
              className="rounded-xl w-full h-[400px]  object-cover"
            />
            <div className="flex flex-row items-start justify-between w-full">
              <div className="flex flex-col ">
                <span>{data?.title}</span>
                <span>$23</span>
              </div>
              <span className="flex flex-row items-center">
                New <AiFillStar />
              </span>
            </div>
          </div>
          <div className="w-full lg:w-[380px]">
            <div className="text-[#000000] w-full">
              <div className="mb-6">
                <span className="text-2xl font-semibold ">What's next?</span>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex justify-start items-start flex-row gap-6 ">
                  <BsClipboardCheck className="text-5xl " />
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-lg font-semibold">
                      Verify a few details and publish
                    </span>
                    <span className="text-[16px] w-full leading-none">
                      We’ll let you know if you need to confirm your identity or
                      register with the local government.
                    </span>
                  </div>
                </div>
                <div className="flex justify-start items-start flex-row gap-6 ">
                  <BsCalendarEvent className="text-5xl " />
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-xl font-semibold">
                      Set up your calendar
                    </span>
                    <span className="text-[16px] w-full leading-none">
                      Choose which dates your listing is available. It will be
                      visible 24 hours after you publish.
                    </span>
                  </div>
                </div>
                <div className="flex justify-start items-start flex-row gap-6 ">
                  <FaPen className="text-5xl " />
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-xl font-semibold">
                      Adjust your settings
                    </span>
                    <span className="text-[16px] w-full leading-none">
                      Set house rules, select a cancellation policy, choose how
                      guests book, and more.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className=" mt-8 fixed bottom-0 right-0 left-0 bg-[#fff] w-full ">
        <div className="bg-gray-400 w-full h-1 "></div>
        <div className="flex flex-row justify-between items-center p-3 md:p-4 ">
          <Link onClick={() => navigate(-1)} className="text-gray-[#333]">
            Back
          </Link>
          <button
            onClick={() => navigate("/step3/price")}
            className="bg-gray-600 text-white px-5 py-2 md:px-8 md:py-3 rounded-lg "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
