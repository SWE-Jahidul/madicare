import React from "react";
import HomeDoctorsList from "../HomeDoctorsList/HomeDoctorsList";
import HomeService from "../HomeService/HomeService";
import PatientSay from "../PatientSay/PatientSay";
import Patients from "../PatientsS/Patients";
import HeaderSlider from "./HeaderSlider";

const Home = () => {
  return (
    <div>
      <HeaderSlider></HeaderSlider>
      <HomeDoctorsList></HomeDoctorsList>
      <HomeService></HomeService>
      {/* <Patients></Patients> */}
    </div>
  );
};

export default Home;
