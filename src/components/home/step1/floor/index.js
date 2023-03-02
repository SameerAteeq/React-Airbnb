import React, { Children, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { floorData } from "../../../../data";
import { animation } from "../../../../variants";
import { motion, variants } from "framer-motion";
import { manageRoom } from "../../../../api/room";
const Floor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (floorData["length"]) {
      setData(floorData);
    }
  }, []);
  const handliClick = (id) => {
    setData(
      data?.map((item) =>
        item.id === id ? { ...item, value: item.value + 1 } : item
      )
    );
  };
  const handliClickMinus = (id) => {
    setData(
      data?.map((item) =>
        item.id === id ? { ...item, value: item.value - 1 } : item
      )
    );
  };
  const handleBtn = async () => {
    const filterValue = data?.map((i) => i.value);
    const [guest, bedrooms, beds, bathroom] = filterValue;
    try {
      const resp = await manageRoom({
        id: id,
        noOfGuests: guest,
        noOfBedrooms: bedrooms,
        noOfBeds: beds,
        noOfBathrooms: bathroom,
      });
      navigate(`/${id}/stand-out`);
      console.log(resp, "resp");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="md:flex flex-col h-full justify-center items-center relative w-full ">
      <motion.div
        initial={"hidden"}
        animate={"show"}
        variants={animation}
        className="w-full  md:w-[650px]  flex flex-col items-start  gap-3 pt-[50px]   md:px-[20px]  pb-[92px]  "
      >
        <h1 className="text-[#333] text-[26px] md:text-3xl font-semibold px-8 md:px-0 ">
          Share some basics about your place
        </h1>
        <span className="px-8 md:px-0 text-base md:text-lg text-gray-700 mb-4">
          You'll add more details later, like bed types.
        </span>
        <div className="w-full h-[280px] flex flex-col px-8">
          {data?.map((item) => (
            <div key={item.id}>
              <div
                key={item.id}
                className="flex flex-row justify-between items-center mt-6 mb-6 md:mt-7 md:mb-7"
              >
                <span className="text-xl text-[#444]">{item.name}</span>
                <div className="flex flex-row gap-2 justify-between items-center ">
                  <button
                    onClick={() => handliClickMinus(item.id)}
                    disabled={item.value == 0}
                    className={` ${
                      item.value == 0 ? "cursor-not-allowed opacity-[0.6]" : ""
                    } text-[#333] text-2xl font-semibold border border-gray-400 w-8 h-8 rounded-full`}
                  >
                    -
                  </button>

                  {item.value}
                  <button
                    onClick={() => handliClick(item.id)}
                    className="text-xl text-[#333] font-semibold border  border-gray-400 w-8 h-8 rounded-full"
                  >
                    +
                  </button>
                </div>
              </div>
              {item.divider && (
                <hr className="hidden md:block md:border-b-1 md:border-gray-300" />
              )}
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

export default Floor;
