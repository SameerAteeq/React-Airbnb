import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Authcontext";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const handleClick = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    navigate("/login");
  };

  return (
    <nav>
      <div className="w-full flex justify-between items-center shadow-md p-4">
        <div
          className="md:flex items-center hidden cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} className="w-8 h-8" />
          <span className="text-[#FF5A5F] font-bold text-2xl">airbnb</span>
        </div>
        <div>
          {user ? (
            <button
              onClick={handleClick}
              className="bg-pink-600 text-base text-white py-2 px-3 rounded-md"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-pink-600 text-base text-white py-2 px-3 rounded-md"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
