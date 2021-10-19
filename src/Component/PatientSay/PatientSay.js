import React, { useEffect, useState } from "react";
import Patients from "../PatientsS/Patients";

const PatientSay = () => {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    fetch("./patientssyas.json")
      .then((res) => res.json())
      .then((data) => {
        setPatients(data);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {patients.map((patient) => (
          <Patients key={patient.id} patient={patient}></Patients>
        ))}
      </div>
    </div>
  );
};

export default PatientSay;
