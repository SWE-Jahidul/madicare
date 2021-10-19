import React from "react";

import img2 from "../images/istockphoto-1000854096-612x612.jpg";

const Contact = () => {
  return (
    <div className="container">
      <div className="row d-flex align-items-center pt-5">
        <div
          className="col-md-6 "
          style={{
            textAlign: "left",
          }}
        >
          <h5
            className=""
            style={{
              color: "#007D9E",
            }}
          >
            Get in Touch
          </h5>
          <p>
            {" "}
            establish communication with someone; "did you finally connect with
            your long-lost cousin?" touch base, connect. interact - act together
            or towards others or with others; "He should interact more with his
            colleagues"
          </p>

          <img
            className="img-fluid p-3"
            src={img2}
            style={{}}
            alt="Card image cap"
          />
        </div>

        <div
          className="col-md-6"
          style={{
            textAlign: "left",
          }}
        >
          <h4
            className=""
            style={{
              color: "#007D9E",
            }}
          >
            Medical Press
          </h4>

          <p>121 King Street, Melbourne Victoria 3000 Australia</p>

          <p>
            <span className="fw-bold">Phone: </span> +1-800-123-4567
          </p>

          <p>
            <spna className="fw-bold"> Fax: </spna> +1-123-456-7890
          </p>
        </div>
      </div>

      <div className="contact-details ">
        <div class="container overflow-hidden">
          <div class="row gx-5 py-5">
            <div class="col">
              <div
                class="p-3 border t"
                style={{
                  backgroundColor: "#007d9e",
                  color: "white",
                  height: 120,
                }}
              >
                <p>121 King Street,</p>
                <p></p> Melbourne Victoria 3000{" "}
              </div>
            </div>
            <div class="col">
              <div
                class="p-3 border"
                style={{
                  backgroundColor: "#007d9e",
                  color: "white",
                  height: 120,
                }}
              >
                {" "}
                <p>Call Us Now at </p>
                <p>+1-800-654-3210</p>
              </div>
            </div>

            <div class="col">
              <div
                class="p-3 border "
                style={{
                  backgroundColor: "#007d9e",
                  color: "white",
                  height: 120,
                }}
              >
                {" "}
                <p>Email Us at</p> <p>info@yourwebsite.com </p>
              </div>
            </div>

            <div class="col">
              <div
                class="p-3 border "
                style={{
                  backgroundColor: "#007d9e",
                  color: "white",
                  height: 120,
                }}
              >
                {" "}
                <p> Book Online</p> <p> Appointment Now </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
