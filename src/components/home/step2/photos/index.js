import React, { useState } from "react";
import { motion } from "framer-motion";
import { json, Link, useNavigate, useParams } from "react-router-dom";
import { animation } from "../../../../variants";
import { IoMdImages } from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { manageRoom } from "../../../../api/room";

const Photos = () => {
  const { id } = useParams();
  const [imgs, setImages] = useState([]);
  const [respImgs, setResImages] = useState([]);
  const [loading, setloading] = useState(false);

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleImages = (e) => {
    setResImages(Array.from(e.target.files));
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };
  console.log(respImgs, "images");

  const handleOpen = (id) => {
    console.log(id, "id");
    const resp = imgs?.find((item, ind) => ind === id);
    if (resp) {
      setOpen(!open);
    } else {
      setOpen(false);
    }
  };
  const handleBtn = async () => {
    setloading(true);
    const formData = new FormData();

    for (let i = 0; i < respImgs.length; i++) {
      formData.append("files", respImgs[i]);
    }
    formData.append("id", +id);
    try {
      const resp = await manageRoom(formData, {
        "Content-Type": "multipart/form-data",
      });
      console.log(resp);
      navigate(`/${id}/title`);
      setloading(false);
    } catch (err) {
      setloading(false);
      console.log(err);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="md:flex flex-col h-full justify-center items-center relative w-full ">
      <motion.div
        initial={"hidden"}
        animate={"show"}
        variants={animation}
        className="px-4 h-full w-full md:w-[650px] flex flex-col justify-center items-start gap-3 pt-[50px] md:px-[20px] pb-[120px] "
      >
        <h1 className="text-[#333] text-2xl md:text-3xl font-semibold  md:px-0 ">
          Choose at least 5 photos
        </h1>
        <span className=" md:px-0 text-base md:text-lg text-gray-700 mb-8">
          You'll need 5 photos to get started. You can add more or make changes
          later.
        </span>
        <form className="w-full" onSubmit={handleSubmit}>
          {imgs.length === 0 ? (
            <div className="flex flex-col justify-center items-center border border-dotted border-gray-900 w-full  md:w-full h-[200px] md:h-[300px] ">
              <div className="flex flex-col justify-center items-center gap-4">
                <IoMdImages className="text-3xl md:text-5xl" />
                <span className="text-xl md:text-2xl font-semibold">
                  Drag your photos here
                </span>
                <span className="text-lg text-gray-900 ">
                  choose at least 5 photos
                </span>
                <label
                  className="cursor-pointer active:to-blue-500 underline"
                  id="uploadfile"
                >
                  <input
                    id="uploadfile"
                    type="file"
                    hidden
                    multiple
                    onChange={handleImages}
                    accept="image/png, image/gif, image/jpeg"
                  />
                  Upload from your device
                </label>
              </div>
            </div>
          ) : null}

          {imgs.length > 0 && (
            <>
              <div className="flex flex-row justify-center sm:items-start sm:justify-start items-center gap-2 w-full   md:[700px] h-[400px] flex-wrap overflow-y-auto">
                {imgs.map((item, ind) => {
                  return (
                    <div
                      key={ind}
                      className="flex justify-center sm:items-start items-center flex-row w-full sm:w-[450px] md:w-[240px] h-fit md:h-[240px] relative"
                    >
                      <div className="flex flex-row border w-full h-full ">
                        <img
                          className="w-full h-full object-cover  bg-no-repeat"
                          src={item}
                        />
                      </div>
                      <div className="absolute top-2 right-3 text-lg text-center text-[#1c1c1c]   rounded-full font-bold ">
                        <button
                          onClick={() => handleOpen(ind)}
                          className="text-center p-1 bg-white rounded-full shadow-xl "
                        >
                          <BiDotsVerticalRounded />
                        </button>
                      </div>
                      <div className="absolute top-4 right-10 rounded-md ">
                        <button
                          className={`${
                            open ? "block" : "hidden"
                          } p-1 shadow-md rounded-md bg-white flex flex-row items-center gap-1`}
                        >
                          <AiFillDelete className="text-lg" /> Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
                <div className=" border border-dotted border-gray-400 h-[240px] w-full sm:w-[450px] md:w-[240px]  md:h-[240px]">
                  <div className="flex items-center justify-center w-full h-full">
                    <label className="cursor-pointer" id="uploadfile">
                      <input
                        id="uploadfile"
                        type="file"
                        hidden
                        multiple
                        onChange={handleImages}
                      />
                      <a id="uploadfile">Add more</a>
                    </label>
                  </div>
                </div>
              </div>
            </>
          )}
        </form>
      </motion.div>
      <div className="fixed bottom-0 right-0 left-0 bg-[#fff] w-full ">
        <div className="bg-gray-400 w-full h-1 "></div>
        <div className="flex flex-row justify-between items-center p-3 md:p-4 ">
          <Link onClick={() => navigate(-1)} className="text-gray-[#333]">
            Back
          </Link>
          <button
            disabled={imgs.length < 5 && loading}
            onClick={handleBtn}
            className={`${
              imgs.length < 5 && loading
                ? "opacity-[0.3] cursor-not-allowed"
                : ""
            } bg-gray-600 text-white px-5 py-2 md:px-8 md:py-3 rounded-lg `}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Photos;
