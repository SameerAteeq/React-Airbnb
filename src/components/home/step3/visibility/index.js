import React, { useEffect, useState } from "react";
import { motion, variants } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";
import { visibilityData } from "../../../../data";
import { animation } from "../../../../variants";
import { manageRoom } from "../../../../api/room";
const Visibility = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [place, setPlace] = useState([]);
  const placeName = place?.title;
  console.log(placeName);
  const navigate = useNavigate();
  useEffect(() => {
    if (visibilityData["length"]) {
      setData(visibilityData);
    }
  }, []);
  console.log(data);

  const clickHandle = (id) => {
    setData(
      data?.map((item) =>
        item.id === id
          ? {
              ...item,
              checked: !item.checked,
            }
          : item
      )
    );
    const selectedPlace = data?.find((item) => item.id === id);
    setPlace(selectedPlace);
  };
  const handleBtn = async () => {
    try {
      const resp = await manageRoom({
        id: id,
        bookingType: placeName,
      });
      console.log(resp);
      navigate(`/${id}/price`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col h-full justify-center items-center relative">
      <motion.div
        initial={"hidden"}
        animate={"show"}
        variants={animation}
        className="w-[300px] sm:w-[450px] md:w-[640px]  flex flex-col items-start  gap-5 pt-[50px]   md:px-[20px]  pb-[92px]  "
      >
        <h1 className="text-[#333] text-2xl md:text-3xl font-semibold">
          Choose who to welcome for your first reservation
        </h1>
        <span className="text-xl text-gray-400">
          After your first guest, anyone can book your place. Learn more
        </span>
        <div className="flex flex-col gap-4 items-start justify-start ">
          {data?.map((item) => (
            <div
              key={item.id}
              onClick={() => clickHandle(item.id)}
              className={` ${
                item.checked ? "border-[#333] rounded-xl" : ""
              } flex flex-row gap-3 justify-start items-start p-2 border-2 w-[300px] sm:w-[450px] md:w-[600px] h-[110px] hover:border-[#333] rounded-xl cursor-pointer `}
            >
              <div className="accent-black ">
                <input
                  type="radio"
                  name="radio"
                  checked={item?.checked}
                  className=" rounded-full h-5 w-5 cursor-pointer text-center"
                />
              </div>
              <div className="flex flex-col justify-start items-start">
                <span className="text-lg sm:text-lg md:text-xl text-[#333] font-semibold">
                  {item.title}
                </span>
                <span className=" text-sm md:text-base text-gray-600">
                  {item.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <div className=" mt-8 fixed bottom-0 right-0 left-0 bg-[#fff] w-full ">
        <div className="bg-gray-400 w-full h-1 "></div>
        <div className="flex flex-row justify-between items-center p-3 md:p-4 ">
          <Link onClick={() => navigate(-1)} className="text-gray-[#333]">
            Back
          </Link>
          <button
            onClick={handleBtn}
            className="bg-gray-600 text-white px-5 py-2 md:px-8 md:py-3 rounded-lg "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Visibility;
