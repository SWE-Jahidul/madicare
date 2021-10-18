import React from "react";

import "./Services.css"
const Service = (props) => {
  const { id, images, details } = props.service;

  return (
    <div className="col-lg-3 col-md-3 col-12 g-3 ">
      <div
        class="card course-card border-0 shadoaa " 
        style={{
          borderRadius: "10px ",
          background: "whitesmoke",
          height: 250,
        }}
      >
        <div className="icon-color mt-5">
          <i className={images}></i>
        </div>
        <div
          className="card-body text-left"
       
        >
            <p>
                {details}
            </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
