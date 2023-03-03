import React, { useEffect, useState } from "react";
import { BsHeart, BsSearch } from "react-icons/bs";
import { HiOutlineHomeModern, HiOutlineUserCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState("show");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY && window.scrollY > lastScrollY) {
      setShow("hide");
    } else {
      setShow("show");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-0 w-full bg-white p-2 md:hidden z-20 ${
        show === "show"
          ? "shadow-lg transition-all transform duration-500 ease-in-out h-auto"
          : "h-0 transition-all transform translate-y-20 duration-500 ease-in-out"
      }`}
    >
      <ul className="flex justify-around items-center">
        <div
          onClick={() => navigate("/")}
          className="flex flex-col items-center text-gray-700 cursor-pointer hover:text-[#FF5A5F]"
        >
          <BsSearch className="text-2xl" />
          <li className="text-sm ">Explore</li>
        </div>
        <div className="flex flex-col items-center text-gray-700 cursor-pointer hover:text-[#FF5A5F]">
          <HiOutlineHomeModern className="text-2xl" />
          <li className="text-sm ">Accomadation</li>
        </div>
        <div
          onClick={() => navigate("/wishlist")}
          className="flex flex-col items-center text-gray-700 cursor-pointer hover:text-[#FF5A5F]"
        >
          <BsHeart className="text-2xl" />
          <li className="text-sm ">Wishlist</li>
        </div>
        <div className="flex flex-col items-center text-gray-700 cursor-pointer hover:text-[#FF5A5F]">
          <HiOutlineUserCircle className="text-2xl" />
          <li className="text-sm ">Profile</li>
        </div>
      </ul>
    </div>
  );
};

export default BottomNav;
