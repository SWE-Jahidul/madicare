import React from "react";
import AllServices from "../AllServices/AllServices";
import useServices from "../Hooks/useServices";

const HomeService = () => {
  const [services] = useServices();
  return (
    <div className="container">
      <h1 className="pt-3">
        {" "}
        <span className="color-chage-header-title"> We are Offering</span>{" "}
        Reliable Services{" "}
      </h1>

      <div className="row mt-3 mb-3">
        {services.slice(0, 4).map((service) => (
          <AllServices key={service.id} service={service}></AllServices>
        ))}
      </div>
    </div>
  );
};

export default HomeService;
