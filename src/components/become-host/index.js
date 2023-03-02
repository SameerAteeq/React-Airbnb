import axios from "axios";
import moment from "moment/moment";
import React, { useContext, useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiAbacus, BiHome } from "react-icons/bi";
import { MdHomeFilled, MdKeyboardArrowRight } from "react-icons/md";
import { SlHome } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { myRoom } from "../../api/room";
import { AuthContext } from "../../context/Authcontext";
import Navbar from "../navbar";

const BecomeHost = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const { user } = useContext(AuthContext);
  console.log("user", user);
  useEffect(() => {
    const getUser = async () => {
      try {
        const getMyroom = await myRoom();
        setData(getMyroom?.data);
        console.log(getMyroom?.data, "data");
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

  const handleClick = async (id) => {
    try {
      const resp = await axios.get(`http://localhost:8000/room/${id}`);
      console.log(resp);
      navigate(`/${id}/about-your-place`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-start h-full mt-12">
        <div className="p-2 md:p-3 flex flex-col gap-3 ">
          <div className="flex flex-col items-start gap-4 mb-14">
            <span className="text-3xl font-semibold ">
              Welcome, {user?.fullname}
            </span>

            <span className="text-2xl text-[#333]">
              {data?.length > 0
                ? "Finish your listing"
                : "Create a new listing "}
            </span>
            {data?.slice(0, visible ? data.length : 3)?.map((item) => (
              <div
                onClick={() => handleClick(item?.id)}
                className="flex flex-row gap-4  items-center p-2 md:px-4 border-[2px] w-full sm:w-[450px] md:w-[600px] h-[90px] hover:border-[#333] rounded-xl cursor-pointer "
              >
                {item?.images?.length > 0 ? (
                  <div className="w-8 h-10 md:w-9 md:h-12">
                    <img
                      className="h-full w-full bg-contain "
                      src={item?.images?.[0]}
                      alt="img..."
                    />
                  </div>
                ) : (
                  <span className=" mb-1 bg-gray-200 p-2 md:p-3 rounded-md">
                    <AiFillHome className="text-lg md:text-2xl" />
                  </span>
                )}
                <div>
                  <span className="text-base sm:text-lg md:text-xl text-[#333] font-semibold">
                    {`Your listing started ${moment(item?.createdAt).format(
                      "MMMM D, YYYY"
                    )}`}
                  </span>
                </div>
              </div>
            ))}

            {data?.length > 3 && (
              <button
                className="underline"
                onClick={() => setVisible(!visible)}
              >
                {visible ? "Show less" : "Show all"}
              </button>
            )}
          </div>
          <div>
            <span className="text-2xl text-[#333]">Start a new listing</span>
            <div
              onClick={() => navigate("/overview")}
              className="flex flex-row gap-4 flex-wrap items-center justify-between px-2 md:px-4  w-full sm:w-[450px] md:w-[600px] h-[90px] rounded-xl cursor-pointer "
            >
              <div className="flex flex-row gap-4 items-center">
                <SlHome className="text-lg md:text-2xl" />
                <span className="text-base md:text-lg text-gray-600 font-thin">
                  Creat new listing
                </span>
              </div>
              <div>
                <MdKeyboardArrowRight className="text-2xl text-[#333]" />
              </div>
            </div>
            <hr className="border-b border-gray-200" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BecomeHost;
