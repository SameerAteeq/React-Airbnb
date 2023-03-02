import React from "react";
import Content from "./Places";
import ProfileNavbar from "./profileNavbar";
import NavItems from "./profileNavbar/NavItems";

const ProfileHome = () => {
  return (
    <div>
      <ProfileNavbar />
      <NavItems />
      <Content />
    </div>
  );
};

export default ProfileHome;
