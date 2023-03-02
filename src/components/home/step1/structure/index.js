import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { StructureData } from "../../../../data";
import { motion, variants } from "framer-motion";
import { animation } from "../../../../variants";
import axios from "axios";
import { manageRoom } from "../../../../api/room";
const Structure = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let token = localStorage.getItem("token");

  const [data, setData] = useState([]);
  const [resData, setResData] = useState();
  const [place, setPlace] = useState([]);
  console.log(resData, "respdata");
  const placeName = place?.name;
  console.log(data);
  useEffect(() => {
    setData(StructureData);
  }, []);

  const clickHandle = (id) => {
    const selectedCount = data?.filter((i) => i.selected).length;
    if (selectedCount === 1) {
      return;
    }
    setData(
      data?.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
    const selectedPlace = data?.find((item) => item.id === id);
    setPlace(selectedPlace);
  };

  const handleBtn = async () => {
    try {
      const resp = await manageRoom({ id: id, kindOfPlace: placeName });
      console.log(resp?.data?.kindOfPlace, "r");
      setResData(resp?.data?.kindOfPlace);

      navigate(`/${id}/privacy-type`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex h-full flex-col justify-center items-center relative">
      <motion.div
        initial={"hidden"}
        animate={"show"}
        variants={animation}
        className="flex flex-col justify-start items-start gap-10 pt-[50px] p-3 md:px-[20px] pb-[100px]  h-full  "
      >
        <h1 className="text-[#333] text-3xl md:text-4xl ">
          Which of these best describes your place?
        </h1>
        <div className="flex flex-row justify-center items-start flex-wrap gap-4 max-w-[700px]">
          {data.map((item) => (
            <div key={item.id} onClick={() => clickHandle(item.id)}>
              <div
                className={` ${
                  resData === item?.name
                    ? "border border-[#333] rounded-xl"
                    : ""
                } px-4 flex flex-col flex-wrap items-start justify-center border-[2px] w-[160px] h-[100px] sm:w-[240px] md:w-[200px] hover:border-[#333] rounded-xl cursor-pointer`}
              >
                <span className="text-3xl mb-1">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="shadow-black fixed bottom-0 right-0 left-0 bg-[#fff] w-full ">
        <div className="bg-gray-400 w-full "></div>
        <div className="flex flex-row justify-between items-center p-4 ">
          <Link onClick={() => navigate(-1)} className="text-gray-[#333]">
            Back
          </Link>
          <button
            disabled={data?.selected}
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

export default Structure;
