import React from "react";

const PatientS = (props) => {
  const { name, details, images, title } = props.patient;
  return (
    <div className="col-lg-6 col-md-6 col-12 g-3 ">
      <h2  style={{
                  color: "#007d9e",
                }}> {name}</h2>
      <p> {details}</p>

      <div className="d-flex align-items-center mt-3">
        <div>
          <img
            className=""
            src={images}
            style={{
              height: 50,
              width: 50,
              borderRadius: "50px",
            }}
            alt="Card image cap"
          />
        </div>
        <div className="ms-2">
          {name}
          <br/>
          {title}
        </div>
      </div>
    </div>
  );
};

export default PatientS;
