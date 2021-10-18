import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <div className="row pt-4">
        <div
          className="col-md-6 fw-bold "
          style={{
            fontSize: 25,
          }}
        >
          MEDICARE
        </div>
        <div className="col-md-6">
          <span>Location : Bhandaria, Pirojpur </span>

          <span
            className="ms-2"
            style={{
              color: "#84D6FF",
            }}
          >
            Contact :017123456789
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
              <i class="fa fa-navicon" aria-hidden="true"></i>
            </span>
          </button>
          <div
            className="collapse navbar-collapse fw-bold"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
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
                <Link to="/contact" className="nav-link menu-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/doctors" className="nav-link menu-link">
                  Doctors
                </Link>
              </li>
            </ul>
        </div>

        <div className="d-flex flex-row-reverse ">
          <Link to="/singin" className="signin " >
            Sign In
          </Link>
          <Link to="/singout" className="Singout me-3">
            Sign Out
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
