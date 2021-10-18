import React from "react";

const SingUp = () => {
  return (
    <div className="d-flex justify-content-center ">
      <div className="sign-in shadow-lg my-5  px-5">
        <h3 className="text-center pt-5"> CREATE AN ACCOUNT</h3>
        <hr className="w-75 ms-auto me-auto" />

        <form>
          <div className="form-group my-4">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="User Name "
            />
          </div>
          <div className="form-group my-4">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div className="form-group my-4">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Password "
            />
          </div>

          <div className="form-group my-4">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Confirm Password"
            />
          </div>

          <button type="button" class="btn my-2 mt-3">
            CREATE AN ACCOUNT{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
