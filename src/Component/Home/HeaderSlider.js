import React from "react";

import doc1 from "../images/doc1.jpg";
import doc2 from "../images/doc2.jpg";
import doc3 from "../images/doc3.jpg";
const HeaderSlider = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={doc1}
              className="d-block w-100"
              alt="..."
              style={{
                height: 500,
              }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h3
                style={{
                  color: "#007d9e",
                }}
              >
                MEDICAL SERVICES THAT YOU CAN TRUST
              </h3>
              <p
                style={{
                  color: "#007d9e",
                }}
              >
                More Results. Trusted results for Medical Insurance In Us. Check
                Visymo Search for the best results! Unlimited Access.{" "}
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={doc2}
              className="d-block w-100"
              alt="..."
              style={{
                height: 500,
              }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h3
                style={{
                  color: "#007d9e",
                }}
              >
                WE CARE FOR YOU
              </h3>
              <p
                style={{
                  color: "#007d9e",
                }}
              >
                We Care For You is a full service local and long distance moving
                company, we also offer a wide range of concierge services such
                as adult care
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={doc3}
              className="d-block w-100"
              alt="..."
              style={{
                height: 500,
              }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h3
                style={{
                  color: "#007d9e",
                }}
              >
                QUALIFIED STAFF WITH EXPERTISE IN SERVICES WE OFFER
              </h3>
              <p
                style={{
                  color: "#007d9e",
                }}
              >
                Search Seo Services Uk, Top Results From Trusted Resources.
                Search Seo Services Uk, Get Expert Advice and Curated Content on
                Top10ques
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HeaderSlider;
