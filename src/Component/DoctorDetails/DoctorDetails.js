import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const DoctorDetails = () => {
  const { doctorsId } = useParams();
  const [doctors, setDoctors] = useState([]);
  const [currentDoctor, setCurrentDoctor] = useState();

  useEffect(() => {
    fetch("../doctors.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setDoctors(data);
      });
  }, []);

  useEffect(() => {
    let myDoctor = doctors.filter((doctor) => doctor.id == doctorsId);
    setCurrentDoctor(myDoctor[0]);
    //console.log(myDoctor)
  }, [doctors]);
  return (
    <div>
      <div className="headerdiv">
        {currentDoctor && (
          <div className="container mt-3">
            <div className="row d-flex align-items-center">
              <div className="col-md-4 ">
                <img
                  className="card-img-top"
                  src={currentDoctor.image}
                  style={{}}
                  alt="Card image cap"
                />
                <h5 className="text-dark pt-2">{currentDoctor.name} </h5>

                <p> {currentDoctor.PrimaryCembar}</p>
                <p> {currentDoctor.personalCembar}</p>
              </div>

              <div
                className="col-md-7"
                style={{
                  textAlign: "left",
                }}
              >
                <h3 className="text-dark pt-2">{currentDoctor.name} </h3>

                <h4 className="pt-2">{currentDoctor.experiencetile} </h4>
                <h6> {currentDoctor.date}</h6>
                <p className="pt-2">{currentDoctor.experiencetiledetails}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorDetails;
