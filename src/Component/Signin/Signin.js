import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import "./SignIn.css";

const Signin = () => {


  const { signinUsingGoogle,FacebookSignin } = useAuth();
     return (
    <div className="d-flex justify-content-center ">
      <div className="sign-in shadow-lg my-5  px-5">
        <h3 className="text-center pt-5"> LOGIN TO MEDICARE</h3>
        <hr className="w-75 ms-auto me-auto" />
        <div className="d-flex justify-content-around">
          <button type="button" class="fb my-2 " onClick={FacebookSignin} >
            Facebook
          </button>
          <button
            type="button"
            class="gmail  my-2 "
           onClick={signinUsingGoogle}
          >
            Gmail
          </button>
        </div>

        <hr className="w-75 ms-auto me-auto" />

        <form>
          <div className="form-group pb-2">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control my-3"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>

          <button type="button" class="btn my-2 mt-3">
            LOG IN{" "}
          </button>

          <Link to="/signup">
            <button type="button" class="reg my-2">
              Register
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signin;
