import React, { useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { profileNavIcons } from "../../../../data";

const NavItems = () => {
  const carouselRef = useRef();

  const navigation = (dir) => {
    const container = carouselRef.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - container.offsetWidth
        : container.scrollLeft + container.offsetWidth;

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white w-full z-10">
      <div className="flex items-center gap-2 p-2 w-full">
        <button
          className=" hidden md:block bg-white rounded-full shadow-xl p-1"
          onClick={() => navigation("left")}
        >
          <AiOutlineArrowLeft className="text-xl text-black" />
        </button>
        <div
          ref={carouselRef}
          className=" flex gap-10 justify-between items-center overflow-scroll"
        >
          {profileNavIcons.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-center items-center text-gray-400 w-full hover:text-black cursor-pointer"
            >
              <span className="text-2xl ">{item.icon}</span>
              <span className="text-xs ">{item.name}</span>
            </div>
          ))}
        </div>
        <button
          className="hidden md:block bg-white rounded-full shadow-xl p-1"
          onClick={() => navigation("right")}
        >
          <AiOutlineArrowRight className="text-xl text-black" />
        </button>
      </div>
    </div>
  );
};

export default NavItems;
