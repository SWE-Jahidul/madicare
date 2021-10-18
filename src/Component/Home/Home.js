import React from "react";
import HomeDoctorsList from "../HomeDoctorsList/HomeDoctorsList";
import HomeService from "../HomeService/HomeService";
import HeaderSlider from "./HeaderSlider";

const Home = () => {
  return (
    <div>
      <HeaderSlider></HeaderSlider>
      <HomeDoctorsList></HomeDoctorsList>
      <HomeService></HomeService>
    </div>
  );
};

export default Home;
