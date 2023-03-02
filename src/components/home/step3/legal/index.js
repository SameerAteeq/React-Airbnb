import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";
import { animation } from "../../../../variants";
import axios from "axios";
const Legal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full justify-center items-center relative ">
      <motion.div
        initial={"hidden"}
        animate={"show"}
        variants={animation}
        className="px-0 w-[350px] sm:w-[450px] md:w-[640px]  flex flex-col items-start  gap-1 pt-[50px]   md:px-[10px]  pb-[92px]  "
      >
        <h1 className="text-[#333] text-2xl md:text-3xl font-semibold mb-4">
          Just one last step!
        </h1>
        <span className="text-xl text-[#000000] font-semibold ">
          Does your place have any of these?
        </span>
        <div className="flex flex-col gap-4 w-full pt-2 pb-2">
          <div className="flex justify-between items-center   ">
            <label
              htmlFor="security"
              className="w-full text-lg text-gray-700 cursor-pointer "
            >
              Security camera(s)
            </label>
            <input
              id="security"
              type="checkbox"
              value=""
              className="w-6 h-6 accent-black"
            />
          </div>
          <div className="flex justify-between items-center  ">
            <label
              htmlFor="weapon"
              className="w-full text-lg text-gray-700 cursor-pointer"
            >
              Weapons
            </label>
            <input
              id="weapon"
              type="checkbox"
              value=""
              className="w-6 h-6 accent-black"
            />
          </div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="animals"
              className="w-full text-lg text-gray-700 cursor-pointer"
            >
              Dangerous anmials
            </label>
            <input
              id="animals"
              type="checkbox"
              value=""
              className="w-6 h-6 accent-black"
            />
          </div>
          <hr className="border-b-1 border-gray-300 my-10" />
        </div>
        <div className="flex flex-col gap-2 ">
          <span className="text-base md:text-xl text-gray-500 font-semibold -tracking-normal">
            Important things to know
          </span>
          <span className="text-base text-gray-400">
            Be sure to comply with your local laws and review Airbnb's
            nondiscrimination policy and guest and Host fees.
          </span>
        </div>
      </motion.div>
      <div className=" mt-8 fixed bottom-0 right-0 left-0 bg-[#fff] w-full ">
        <div className="bg-gray-400 w-full h-1 "></div>
        <div className="flex flex-row justify-between items-center p-3 md:p-4 ">
          <Link onClick={() => navigate(-1)} className="text-gray-[#333]">
            Back
          </Link>
          <button
            onClick={() => navigate(`/${id}/receipt`)}
            className="bg-gray-600 text-white px-5 py-2 md:px-8 md:py-3 rounded-lg "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Legal;
