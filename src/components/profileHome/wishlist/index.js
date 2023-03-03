import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import ProfileNavbar from "../profileNavbar";
import { removeToWishlist } from "../../../redux/slice/wishListSlice";
import { truncate } from "../../../utils/helper";
import { toast } from "react-hot-toast";

const Wishlist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);

  const removeItem = (id) => {
    const check = wishlist?.find((item) => item.id === id);
    dispatch(removeToWishlist(check));
    toast.success(`${check?.city} removed successfuly`);
  };
  return (
    <div className="w-full h-full">
      <ProfileNavbar type="wishlist" location="wishlist" />
      <div className="md:mt-20 p-2">
        <h1 className="text-center mb-5 text-3xl md:text-4xl lg:text-5xl">
          Wishlist
        </h1>
        {wishlist.length > 0 ? (
          <div className="flex flex-col gap-2">
            {wishlist?.map((item) => (
              <div
                className="flex justify-between bg-gray-200  hover:bg-gray-300 p-2 rounded-md"
                key={item?.id}
              >
                <div
                  className="flex gap-2 items-center flex-wrap cursor-pointer"
                  onClick={() => navigate(`/${item.id}`)}
                >
                  <div className="w-28 sm:w-44 md:w-72">
                    <img
                      src={item.img[0]}
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className=" text-base md:text-2xl">
                      {truncate(item?.city, 24)}
                    </h1>
                    <span className="text-sm md:tex-xl">
                      ${item?.price}/ per week
                    </span>
                    <span className="flex items-center text-gray-600 text-sm ">
                      <AiFillStar /> {item?.rating}
                    </span>
                  </div>
                </div>

                <button onClick={() => removeItem(item?.id)}>
                  <GrClose />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <h1 className="text-center">Wishlist is Empty</h1>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
