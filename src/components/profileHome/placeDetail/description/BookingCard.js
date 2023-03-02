import React from "react";

const BookingCard = () => {
  return (
    <div className="flex justify-center w-full ">
      <div className="flex flex-col gap-6 bg-white shadow-2xl border rounded-md p-4 w-full md:w-96">
        <h1 className="text-xl">Price $250 /per night</h1>
        <div className="border border-gray-600">
          <div className="flex">
            <div className="p-1">
              <label for="checkIn">Check in</label>
              <input type="date" name="checkIn" />
            </div>
            <div className="border-r border-gray-600 h-auto"></div>
            <div className="p-1">
              <label for="checkIn">Check Out</label>
              <input type="date" name="checkIn" />
            </div>
          </div>
          <div className="border-b border-gray-600"></div>
          <div className=" w-full">
            <input
              placeholder="Number of guest"
              type="number"
              className="w-full outline-none p-2"
            />
          </div>
        </div>
        <button className="w-full p-2 bg-[#FF5A5F] text-white text-lg rounded-md">
          Reserved
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
