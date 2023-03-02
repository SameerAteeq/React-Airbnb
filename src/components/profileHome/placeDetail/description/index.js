import React from "react";
import BookingCard from "./BookingCard";

const PlaceDescription = () => {
  return (
    <div className="mt-6">
      <div className="flex justify-between flex-wrap md:flex-nowrap gap-3 w-full">
        <div className="w-full">
          <h1 className="text-2xl text-gray-800 font-semibold mb-1">
            Description
          </h1>
          <span className="text-base text-gray-900">
            Enjoy a private mountain getaway with huge views on 10 wooded acres!
            The property is nestled among mature timber, with a creek running
            through the backyard. Most days, you'll get to see moose :) The main
            house is 3700+ sq ft with 3 bedrooms, a loft, and 3.5 bathrooms; the
            detached garage is heated with 2 separate bunkrooms with 5 total
            beds. Starlink wifi, hot tub, covered deck & patio, pool table,
            sunrise over Pike's Peak, sunset over Pennsylvania Mtn, and views of
            the Milky Way at night :)
          </span>
        </div>
        <div className="w-full">
          <BookingCard />
        </div>
      </div>
    </div>
  );
};

export default PlaceDescription;
