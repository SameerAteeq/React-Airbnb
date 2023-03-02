import React from "react";
import { useParams } from "react-router-dom";
import Step1 from "../home/step1";
import Floor from "../home/step1/floor";
import Location from "../home/step1/location";
import PrivacyType from "../home/step1/privacyType";
import Structure from "../home/step1/structure";
import Step2 from "../home/step2";
import Animities from "../home/step2/amenities";
import Description from "../home/step2/description";
import Photos from "../home/step2/photos";
import Title from "../home/step2/title";
import Step3 from "../home/step3";
import Legal from "../home/step3/legal";
import Price from "../home/step3/price";
import Receipt from "../home/step3/receipt";
import Visibility from "../home/step3/visibility";
const Room = () => {
  const { tab } = useParams();
  const _renderPages = () => {
    switch (tab) {
      case "about-your-place":
        return <Step1 />;
      case "structure":
        return <Structure />;
      case "privacy-type":
        return <PrivacyType />;
      case "location":
        return <Location />;
      case "floor":
        return <Floor />;
      case "stand-out":
        return <Step2 />;
      case "amenities":
        return <Animities />;
      case "photos":
        return <Photos />;
      case "title":
        return <Title />;
      case "description":
        return <Description />;
      case "finish-setup":
        return <Step3 />;
      case "visibility":
        return <Visibility />;
      case "price":
        return <Price />;
      case "legal":
        return <Legal />;
      case "receipt":
        return <Receipt />;
      default:
        return <div></div>;
    }
  };

  return <div>{_renderPages()}</div>;
};

export default Room;
