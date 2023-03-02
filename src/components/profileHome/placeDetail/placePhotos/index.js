import React, { useRef, useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineClose,
} from "react-icons/ai";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const PlacePhotos = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const containerRef = useRef(0);

  const navigation = (dir) => {
    const container = containerRef.current;

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
    <div className="">
      {/* //For Small Devices */}
      <div className="common relative flex md:hidden h-full overflow-x-hidden box-border ">
        <AliceCarousel disableDotsControls>
          {data?.map((item) => (
            <img
              src={item}
              className="h-full w-full object-cover relative rounded-lg bg-no-repeat bg-center cursor-pointer hover:bg-black hover:opacity-90  "
            />
          ))}
        </AliceCarousel>
      </div>

      {/* For Large Device... */}

      <div className="relative hidden md:flex h-full w-full gap-1 ">
        <div className="h-96 w-full">
          <div className="h-full w-full">
            {data?.[0] && (
              <img
                src={data?.[0]}
                className="h-full w-full rounded-l-lg object-cover bg-no-repeat bg-center cursor-pointer hover:opacity-90 "
              />
            )}
          </div>
        </div>

        <div className=" h-96 w-1/2 hidden md:flex flex-col items-center justify-center gap-1 box-border ">
          <div className="h-1/2 w-full">
            {data?.[1] && (
              <img
                src={data?.[1]}
                className="h-full w-full object-cover bg-no-repeat bg-center cursor-pointer hover:bg-black hover:opacity-90 "
              />
            )}
          </div>

          <div className="h-1/2 w-full">
            {data?.[2] && (
              <img
                src={data?.[2]}
                className="h-full w-full object-cover bg-no-repeat bg-center cursor-pointer hover:opacity-90 "
              />
            )}
          </div>
        </div>

        <div className=" h-96 w-1/2 hidden lg:flex flex-col gap-1 box-border ">
          <div className="h-1/2 w-full">
            {data?.[3] && (
              <img
                src={data?.[3]}
                className="h-full w-full rounded-r-lg object-cover bg-no-repeat bg-center cursor-pointer hover:bg-black hover:opacity-90 "
              />
            )}
          </div>
          <div className="h-1/2 w-full">
            {data?.[4] && (
              <img
                src={data?.[4]}
                className="h-full w-full rounded-r-lg object-cover bg-no-repeat bg-center cursor-pointer hover:bg-black hover:opacity-90 "
              />
            )}
          </div>
        </div>

        <div
          onClick={() => setOpenModal(true)}
          className="absolute bottom-3 right-3 bg-white rounded-3xl cursor-pointer p-3 shadow-lg"
        >
          <span>Show all photos</span>
        </div>
      </div>

      {/* Model */}

      {openModal && (
        <div className=" absolute inset-0 bg-black text-white h-full w-full z-20">
          <div className="text-right">
            <button
              className=" p-2 cursor-pointer text-2xl"
              onClick={() => setOpenModal(false)}
            >
              <AiOutlineClose />
            </button>
          </div>

          {data?.map((item) => (
            <div className=" flex flex-col bg-black p-4 px-24 min-h-64 w-full">
              <img
                src={item}
                className="h-full w-full object-cover rounded-lg bg-no-repeat bg-center cursor-pointer hover:bg-black hover:opacity-90  "
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlacePhotos;
