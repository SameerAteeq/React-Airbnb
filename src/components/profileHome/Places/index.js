import React from "react";
import { toast } from "react-hot-toast";
import { AiOutlineHeart } from "react-icons/ai";
import { BiStar } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { placesData } from "../../../data";
import { addToWishlist } from "../../../redux/slice/wishListSlice";

const Content = () => {
  const wishList = useSelector((state) => state.wishlist);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const wishlistHandler = (id) => {
    const wishItem = placesData?.find((item) => item.id === id);
    if (!wishList?.includes(wishItem)) {
      dispatch(addToWishlist(wishItem));
      toast.success(`${wishItem?.city} Added to wishlist`);
      navigate("/wishlist");
    } else {
      toast.error(`${wishItem?.city} is already added`);
    }
  };
  return (
    <div className="mt-24 p-3 pb-8">
      <div className="flex justify-center items-center flex-wrap gap-2 ">
        {placesData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col w-full md:max-w-xs cursor-pointer z-0"
          >
            <div className="relative w-full h-80">
              <img
                onClick={() => navigate(`/${item.id}`)}
                src={item.img[0]}
                className="w-full h-full rounded-xl object-cover "
              />
              <div className="absolute top-3 right-6 z-10">
                <button onClick={() => wishlistHandler(item.id)}>
                  <AiOutlineHeart className="text-2xl text-white font-bold " />
                </button>
              </div>
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
