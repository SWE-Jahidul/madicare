import React from 'react';

const AllServices = (props) => {

    const { images, details,Title } = props.service;

    return (
        <div className="col-lg-3 col-md-3 col-12 g-3 ">
        <div
          className="card course-card border-0 shadoaa " 
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
            className="card-body text-left">
                <h6> {Title}</h6>
              <p>
                  {details}
              </p>
          </div>
        </div>
      </div>
    );
};

export default AllServices;