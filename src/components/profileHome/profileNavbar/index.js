import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";
import user from "../../../assets/images/receiptimg.jpg";
import { BsSearch } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import NavItems from "./NavItems";
import BottomNav from "./bottomNav";
import { useNavigate } from "react-router-dom";

const ProfileNavbar = ({ type, location }) => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-10  ${
          location ? "md:block hidden" : ""
        }`}
      >
        <div className=" bg-white flex justify-between items-center w-full p-4 ">
          <div
            className="md:flex items-center hidden cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} className="w-8 h-8" />
            <span className="text-[#FF5A5F] font-bold text-2xl">airbnb</span>
          </div>

          {!location && (
            <div className="flex justify-between items-center gap-5 w-full md:w-auto cursor-pointer bg-white p-2 px-4 rounded-3xl shadow-lg border">
              <span>Any where</span>
              <div className="border-l-2 h-6"></div>
              <span>Any week</span>
              <div className="border-l-2 h-6"></div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Add guest</span>
                <div className="bg-[#FF5A5F] text-white p-2 rounded-full">
                  <BsSearch />
                </div>
              </div>
            </div>
          )}

          <div className="md:flex hidden items-center ">
            <span
              onClick={() => navigate("/become-a-host")}
              className="text-base text-gray-700  cursor-pointer hover:bg-gray-100 rounded-2xl md:px-2 lg:px-4 py-2"
            >
              Switch to hosting
            </span>
            <div
              onClick={() => setOpenMenu(!openMenu)}
              className="relative md:flex hidden items-center gap-2 cursor-pointer shadow-md hover:shadow-xl rounded-3xl p-1 px-2 border  "
            >
              <BiMenu className="text-2xl text-gray-400 " />
              <img src={user} className="w-8 h-8 rounded-full" />
              {openMenu && (
                <div className="absolute top-12 right-6 z-20  w-44 text-start rounded-md bg-white shadow-md hidden md:flex flex-col gap-2">
                  <span className="text-gray-700 font-thin hover:text-black cursor-pointer hover:bg-gray-200 p-2 inline-block w-full">
                    Messages
                  </span>
                  <span className="text-gray-700 font-thin hover:text-black cursor-pointer hover:bg-gray-200 p-2 inline-block w-full">
                    Trips
                  </span>
                  <span
                    onClick={() => navigate("/wishlist")}
                    className="text-gray-700 font-thin hover:text-black cursor-pointer hover:bg-gray-200 p-2 inline-block w-full"
                  >
                    Wishlist
                  </span>
                  <span className="text-gray-700 font-thin hover:text-black cursor-pointer hover:bg-gray-200 p-2 inline-block w-full">
                    Account
                  </span>
                  <span
                    onClick={() => navigate("/login")}
                    className="text-gray-700 font-thin hover:text-black cursor-pointer hover:bg-gray-200 p-2 inline-block w-full"
                  >
                    Logout
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="border-b  text-gray-700"></div>
        {!type && (
          <div>
            <NavItems />
          </div>
        )}
      </div>
      <BottomNav />
    </>
  );
};

export default ProfileNavbar;
