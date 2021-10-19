import React, { useEffect, useState } from "react";
import PatientS from "../PatientsS/Patients";

const PatientSay = () => {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    fetch("../patientssyas.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPatients(data);
      });
  }, []);

  return (
    <div className="container p-5">
      <h1 className="pt-2">
        What patients say About{" "}
        <span
          style={{
            color: "#007d9e",
          }}
        >
          Lifecare{" "}
        </span>{" "}
      </h1>
      <p>
        Lifecare is delivering a platform that connects stakeholders across the
        healthcare ecosystem for greater partnership, collaboration and
        discovery.
      </p>
      <div
        className="row"
        style={{
          textAlign: "left",
        }}
      >
        {patients.map((patient) => (
          <PatientS key={patient.id} patient={patient}></PatientS>
        ))}
      </div>
    </div>
  );
};

export default PatientSay;
