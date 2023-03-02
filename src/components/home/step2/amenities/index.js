import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Amenities1,
  Amenities2,
  Amenities3,
  StructureData,
} from "../../../../data";
import { motion, variants } from "framer-motion";
import { animation } from "../../../../variants";
import { manageRoom } from "../../../../api/room";
const Animities = () => {
  const { id } = useParams();
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [place1, setPlace1] = useState([]);
  const [place2, setPlace2] = useState([]);
  const [place3, setPlace3] = useState([]);
  const placeName1 = place1?.name;
  const placeName2 = place2?.name;
  const placeName3 = place3?.name;
  console.log(placeName1, "p1");
  console.log(placeName2, "p2");
  console.log(placeName3, "p3");
  console.log(data1, "1");
  console.log(data2, "2");
  console.log(data3, "3");
  useEffect(() => {
    if (Amenities1["length"]) {
      setData1(Amenities1);
    }
    if (Amenities2["length"]) {
      setData2(Amenities2);
    }
    if (Amenities3["length"]) {
      setData3(Amenities3);
    }
  }, []);
  const navigate = useNavigate();
  const handleClick1 = (id) => {
    const selectedCount = data1?.filter((i) => i.selected).length;
    if (selectedCount === 1) {
      return;
    }
    setData1(
      data1?.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
    const selectedPlace = data1?.find((item) => item.id === id);
    setPlace1(selectedPlace);
  };
  const handleClick2 = (id) => {
    const selectedCount = data2?.filter((i) => i.selected).length;
    if (selectedCount === 1) {
      return;
    }
    setData2(
      data2?.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
    const selectedPlace = data2?.find((item) => item.id === id);
    setPlace2(selectedPlace);
  };
  const handleClick3 = (id) => {
    const selectedCount = data3?.filter((i) => i.selected).length;
    if (selectedCount === 1) {
      return;
    }
    setData3(
      data3?.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
    const selectedPlace = data3?.find((item) => item.id === id);
    setPlace3(selectedPlace);
  };
  const handleBtn = async () => {
    try {
      const resp = await manageRoom({
        id: id,
        amenities: [placeName1, placeName2, placeName3],
      });
      console.log(resp);
      navigate(`/${id}/photos`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex h-full flex-col justify-center md:justify-start items-center relative">
      <motion.div
        initial={"hidden"}
        animate={"show"}
        variants={animation}
        className="flex flex-col justify-center md:justify-start  items-start gap-5 pt-[50px] p-3 md:px-[20px] pb-[100px]  h-full  "
      >
        <h1 className="text-[#333] text-3xl md:text-4xl ">
          Tell guests what your place has to offer
        </h1>
        <span className="flex text-xl items-start">
          You can add more amenities after you publish your listing.
        </span>
        <div className="flex flex-row justify-center sm:justify-start items-start flex-wrap gap-4 max-w-[700px]">
          {data1?.map((item) => (
            <div
              onClick={() => handleClick1(item.id)}
              key={item.id}
              className=""
            >
              <div
                className={`${
                  item.selected ? "border border-[#333] rounded-xl" : ""
                } px-4 flex flex-col flex-wrap items-start justify-center border-[2px] w-[160px] h-[100px] sm:w-[220px] md:w-[200px] hover:border-[#333] rounded-xl cursor-pointer`}
              >
                <span className="text-3xl mb-1">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            </div>
          ))}
        </div>
        <span className="flex items-start text-xl text-[#141313] font-semibold">
          Do you have any standout amenities?
        </span>
        <div className="flex flex-row justify-center md:justify-start items-start flex-wrap gap-4 max-w-[700px]">
          {data2?.map((item) => (
            <div
              onClick={() => handleClick2(item.id)}
              key={item.id}
              className=""
            >
              <div
                className={`${
                  item.selected ? "border border-[#333] rounded-xl" : ""
                } px-4 flex flex-col flex-wrap items-start justify-center border-[2px] w-[160px] h-[100px] sm:w-[220px] md:w-[200px] hover:border-[#333] rounded-xl cursor-pointer`}
              >
                <span className="text-3xl mb-1">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            </div>
          ))}
        </div>
        <span className="flex text-xl items-start text-[#141313] font-semibold">
          Do you have any of these safety items?
        </span>
        <div className="flex flex-row justify-center sm:justify-start items-start flex-wrap gap-4 max-w-[700px]">
          {data3?.map((item) => (
            <div
              onClick={() => handleClick3(item.id)}
              key={item.id}
              className=""
            >
              <div
                className={`${
                  item.selected ? "border border-[#333] rounded-xl" : ""
                } px-4 flex flex-col flex-wrap items-start justify-center border-[2px] w-[160px] h-[100px] sm:w-[220px] md:w-[200px] hover:border-[#333] rounded-xl cursor-pointer`}
              >
                <span className="text-3xl mb-1">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <div className=" fixed bottom-0 right-0 left-0 bg-[#fff] w-full ">
        <div className="bg-gray-400 w-full "></div>
        <div className="flex flex-row justify-between items-center p-4 ">
          <Link onClick={() => navigate(-1)} className="text-gray-[#333]">
            Back
          </Link>
          <button
            onClick={handleBtn}
            className="bg-gray-600 text-white px-8 py-3 rounded-lg "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Animities;
