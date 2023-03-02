import React from "react";
import { BiStar } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { placesData } from "../../../data";

const Content = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-24 p-3 pb-8">
      <div className="flex justify-center items-center flex-wrap gap-2 ">
        {placesData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col w-full md:max-w-xs cursor-pointer "
            onClick={() => navigate(`/${item.id}`)}
          >
            <div className="w-full h-80">
              <img
                src={item.img[0]}
                className="w-full h-full rounded-xl object-cover "
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">{item.city}</span>
              <div className="flex items-center gap-1">
                <BiStar />
                <span>{item.rating}</span>
              </div>
            </div>
            <span className="text-sm text-gray-700">${item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
