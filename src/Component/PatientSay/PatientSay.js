import React from "react";

const PatientSay = (props) => {
  const { name } = props.patient;
  return (
    <div className="container">
      {/* <div className="col-md-6">
        <div
          class="card course-card border-0 shadoaa"
          style={{
            borderRadius: "10px ",
            background: "whitesmoke",
            height: 300,
          }}
        >
          <p>{details}</p>
        </div>
      </div> */}
{name}
      <div className="col-md-6"></div>
    </div>
  );
};

export default PatientSay;
