import React from "react";
import HomeDoctorsList from "../HomeDoctorsList/HomeDoctorsList";
import HomeService from "../HomeService/HomeService";
import PatationSayaAll from "../PatainSysAll/PatationSayaAll";
import PatientSay from "../PatientSay/PatientSay";
import HeaderSlider from "./HeaderSlider";

const Home = () => {
  return (
    <div>
      <HeaderSlider></HeaderSlider>
      <HomeDoctorsList></HomeDoctorsList>
      <HomeService></HomeService>
      {/* <PatientSay></PatientSay> */}
      {/* <PatationSayaAll></PatationSayaAll> */}
    </div>
  );
};

export default Home;
