import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const fullname = userData.name;
    const email = userData.email;
    const password = userData.password;
    // let UserObject = { fullname, email, password };
    try {
      const response = await axios.post("http://localhost:8000/auth/signup", {
        fullname,
        email,
        password,
        role: "USER",
      });
      setLoading(false);
      toast.success("Successfully created");
      navigate("/login");
      console.log(response);
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full ">
      <div className="py-6 flex flex-col justify-center items-start gap-3 w-[360px] md:w-[400px] border shadow-xl rounded-lg">
        <div className="text-center w-full mb-2 ">
          <span className=" text-4xl font-bold text-[#FF5A5F]">Sign Up</span>
        </div>
        <div className="p-2 md:p-4 w-full">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col mb-3 gap-1">
              <label className="text-lg font-semibold text-[#333]">
                Full Name
              </label>
              <input
                value={userData.name}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, name: e.target.value }))
                }
                type="text"
                className="rounded-md bg-gray-100 p-3 "
              />
            </div>
            <div className="flex flex-col mb-6 gap-1">
              <label className="text-lg font-semibold text-[#333]">Email</label>
              <input
                value={userData.email}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, email: e.target.value }))
                }
                type="email"
                className="rounded-md bg-gray-100 p-3 "
              />
            </div>
            <div className="flex flex-col mb-6 gap-1">
              <label className="text-lg font-semibold text-[#333]">
                Password
              </label>
              <input
                value={userData.password}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, password: e.target.value }))
                }
                type="password"
                className="rounded-md bg-gray-100 p-3 "
              />
            </div>
            <button
              disabled={loading}
              type="submit"
              className="w-full p-2 text-lg font-semibold rounded-md bg-[#FF5A5F] text-white"
            >
              {loading ? "Loading..." : "Sign up"}
            </button>
          </form>
          <div className="flex flex-row items-center gap-2 mt-3">
            <span>Already have an account?</span>
            <Link to="/login" className="text-[#FF5A5F] font-semibold">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
