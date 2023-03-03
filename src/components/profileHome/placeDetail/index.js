import React, { useEffect, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { placesData } from "../../../data";
import ProfileNavbar from "../profileNavbar";
import PlaceDescription from "./description";
import PlacePhotos from "./placePhotos";

const PlaceDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [place, setPlace] = useState([]);
  useEffect(() => {
    const findPlace = placesData.find((item) => item.id === +id);
    setPlace(findPlace);
  }, [id]);

  console.log(place, "place");
  return (
    <div className="">
      <ProfileNavbar type="place" />
      <div className="mt-24 flex flex-col justify-center gap-3 lg:px-16 p-4 mx-auto w-full">
        <h1 className="text-2xl text-gray-800 font-semibold flex items-center underline cursor-pointer">
          <IoLocationSharp />
          {place?.city}
        </h1>
        <div>
          <PlacePhotos data={place.img} />
        </div>
        <div className="">
          <PlaceDescription />
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;
