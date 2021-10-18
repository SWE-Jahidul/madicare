import React from "react";
import { Link } from "react-router-dom";

import "./Doctor.css";

const Doctor = (props) => {
  const { id, image, name, PrimaryCembar, personalCembar } = props.doctor;
  return (
    <div className="col-lg-3 col-md-3 col-12 g-3 ">
      <div
        class="card course-card border-0 shadoaa"
        style={{
          borderRadius: "10px ",
          background: "whitesmoke",
          height: 300,
        }}
      >
        <img
          className="card-img-top"
          src={image}
          style={{
            minHeight: "30%",
            maxHeight: 200,
            borderRadius: "10px 10px 0px 0px",
          }}
          alt="Card image cap"
        />
        <div
          className="card-body text-left"
          style={{
            textAlign: "left",
          }}
        >
          <Link className="text-decoration-none" to={`/doctordetails/${id}`}>
            <h5 className="text-dark ">{name} </h5>
          </Link>
          <div>
            <p>{PrimaryCembar} </p>
            <p>{personalCembar} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
