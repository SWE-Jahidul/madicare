import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import img from "../images/basic-rgb-149487945-removebg-preview.png";

import "./Navbar.css";
const Navbar = () => {
  const { users, logOut } = useAuth();
  return (
    <div className="container">
      <div className="row pt-4">
        <div
          className="col-md-6 fw-bold "
          style={{
            fontSize: 25,
            color: "#007D9E",
            textAlign: "left",
          }}
        >
          <img
            className=""
            src={img}
            style={{
              height: 50,
              width: 50,
              borderRadius: "50px",
            }}
            alt="Card image cap"
          />
          LIFECARE
        </div>
        <div className="col-md-6">
          <span
            style={{
              color: "#007D9E",
            }}
          >
            Location : Ontario, Canada{" "}
          </span>

          <span
            className="ms-2"
            style={{
              color: "#007D9E",
            }}
          >
            Contact : ++017123456789
          </span>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon ">
            <i className="fa fa-navicon" aria-hidden="true"></i>
          </span>
        </button>
        <div
          className="collapse navbar-collapse fw-bold"
          id="navbarSupportedContent"
        >
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0 "
            style={{
              color: "#007D9",
            }}
          >
            <li className="nav-item">
              <Link to="/" className="nav-link menu-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link menu-link">
                About
              </Link>
            </li>

           

            <li className="nav-item">
              <Link to="/service" className="nav-link menu-link">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/doctors" className="nav-link menu-link">
                Doctors
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link menu-link">
                Contact
              </Link>
            </li>


            <div className="d-flex flex-row-reverse align-items-center">
              <div className="ms-3">
                {users.email || users.uid ? (
                  <img
                    src={users?.photoURL}
                    alt={users.name}
                    width="35"
                    height="35"
                    style={{
                      borderRadius: "50px",
                    }}
                  />
                ) : (
                  <div></div>
                )}
              </div>

              <div>
                {users.uid || users.email ? (
                  <Link to="" className="signup menu-link " onClick={logOut}>
                    Log Out
                  </Link>
                ) : (
                  <Link to="/signup" className=" signin menu-link ">
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
